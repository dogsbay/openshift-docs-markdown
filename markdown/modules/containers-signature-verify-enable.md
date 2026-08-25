{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling signature verification for Red Hat Container Registries {id="containers-signature-verify-enable_{{ context }}"}

To verify the integrity of the images in the Red Hat Container Registries, you can enable container signature validation for Red Hat Container Registries by writing a signature verification policy file specifying the keys to verify images from these registries.
 
For RHEL8 nodes, the registries are already defined in `/etc/containers/registries.d` by default. {._abstract}

**Procedure**

1.  Create a Butane config file, `51-worker-rh-registry-trust.bu`, containing the necessary configuration for the worker nodes.

    :::note

    {% include "./snippets/butane-version.md" %}
    
    :::

    ```yaml {minja}
    variant: openshift
    version: {{ product_version }}.0
    metadata:
      name: 51-worker-rh-registry-trust
      labels:
        machineconfiguration.openshift.io/role: worker
    storage:
      files:
      - path: /etc/containers/policy.json
        mode: 0644
        overwrite: true
        contents:
          inline: |
            {
              "default": [
                {
                  "type": "insecureAcceptAnything"
                }
              ],
              "transports": {
                "docker": {
                  "registry.access.redhat.com": [
                    {
                      "type": "signedBy",
                      "keyType": "GPGKeys",
                      "keyPath": "/etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release"
                    }
                  ],
                  "registry.redhat.io": [
                    {
                      "type": "signedBy",
                      "keyType": "GPGKeys",
                      "keyPath": "/etc/pki/rpm-gpg/RPM-GPG-KEY-redhat-release"
                    }
                  ]
                },
                "docker-daemon": {
                  "": [
                    {
                      "type": "insecureAcceptAnything"
                    }
                  ]
                }
              }
            }
    ```
1.  Use Butane to generate a machine config YAML file, `51-worker-rh-registry-trust.yaml`, containing the file to be written to disk on the worker nodes:
    ```terminal
    $ butane 51-worker-rh-registry-trust.bu -o 51-worker-rh-registry-trust.yaml
    ```
1.  Apply the created machine config:
    ```terminal
    $ oc apply -f 51-worker-rh-registry-trust.yaml
    ```
1.  Check that the worker machine config pool has rolled out with the new machine config:
    1.  Check that the new machine config was created:
        ```terminal
        $ oc get mc
        ```
        ```terminal title="Sample output"
        NAME                                               GENERATEDBYCONTROLLER                      IGNITIONVERSION   AGE
        00-master                                          a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        00-worker                                          a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        01-master-container-runtime                        a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        01-master-kubelet                                  a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        01-worker-container-runtime                        a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        01-worker-kubelet                                  a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        51-master-rh-registry-trust                                                                   3.5.0             13s
        51-worker-rh-registry-trust                                                                   3.5.0             53s
        99-master-generated-crio-seccomp-use-default                                                  3.5.0             25m
        99-master-generated-registries                     a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        99-master-ssh                                                                                 3.2.0             28m
        99-worker-generated-crio-seccomp-use-default                                                  3.5.0             25m
        99-worker-generated-registries                     a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             25m
        99-worker-ssh                                                                                 3.2.0             28m
        rendered-master-af1e7ff78da0a9c851bab4be2777773b   a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             8s
        rendered-master-cd51fd0c47e91812bfef2765c52ec7e6   a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             24m
        rendered-worker-2b52f75684fbc711bd1652dd86fd0b82   a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             24m
        rendered-worker-be3b3bce4f4aa52a62902304bac9da3c   a2178ad522c49ee330b0033bb5cb5ea132060b0a   3.5.0             48s
        ```

        where:

        `51-worker-rh-registry-trust`
        :   Specifies the new machine config.

        `rendered-worker-be3b3bce4f4aa52a62902304bac9da3c`
        :   Specifies the new rendered machine config.

    1.  Check that the worker machine config pool is updating with the new machine config:
        ```terminal
        $ oc get mcp
        ```
        ```terminal title="Sample output"
        NAME     CONFIG                                             UPDATED   UPDATING   DEGRADED   MACHINECOUNT   READYMACHINECOUNT   UPDATEDMACHINECOUNT   DEGRADEDMACHINECOUNT   AGE
        master   rendered-master-af1e7ff78da0a9c851bab4be2777773b   True      False      False      3              3                   3                     0                      30m
        worker   rendered-worker-be3b3bce4f4aa52a62902304bac9da3c   False     True       False      3              0                   0                     0                      30m
        ```

        When the `UPDATING` field is `True`, the machine config pool is updating with the new machine config. When the field becomes `False`, the worker machine config pool has rolled out to the new machine config.
1.  If your cluster uses any RHEL7 worker nodes, when the worker machine config pool is updated, create YAML files on those nodes in the `/etc/containers/registries.d` directory, which specify the location of the detached signatures for a given registry server. The following example works only for images hosted in `registry.access.redhat.com` and `registry.redhat.io`.
    1.  Start a debug session to each RHEL7 worker node:
        ```terminal
        $ oc debug node/<node_name>
        ```
    1.  Change your root directory to `/host`:
        ```terminal
        sh-4.2# chroot /host
        ```
    1.  Create a `/etc/containers/registries.d/registry.redhat.io.yaml` file that contains the following:
        ```terminal
        docker:
             registry.redhat.io:
                 sigstore: https://registry.redhat.io/containers/sigstore
        ```
    1.  Create a `/etc/containers/registries.d/registry.access.redhat.com.yaml` file that contains the following:
        ```terminal
        docker:
             registry.access.redhat.com:
                 sigstore: https://access.redhat.com/webassets/docker/content/sigstore
        ```
    1.  Exit the debug session.