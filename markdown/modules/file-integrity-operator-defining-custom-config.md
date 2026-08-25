{%- set _mod_docs_content_type = "PROCEDURE" %}
# Defining a custom File Integrity Operator configuration {id="file-integrity-operator-defining-custom-config_{{ context }}"}

This example focuses on defining a custom configuration for a scanner that runs on the control plane nodes based on the default configuration provided for the `worker-fileintegrity` CR. This workflow might be useful if you are planning to deploy a custom software running as a daemon set and storing its data under `/opt/mydaemon` on the control plane nodes. {._abstract}

**Procedure**

1.  Make a copy of the default configuration.
1.  Edit the default configuration with the files that must be watched or excluded.
1.  Store the edited contents in a new config map.
1.  Point the `FileIntegrity` object to the new config map through the attributes in `spec.config`.
1.  Extract the default configuration:
    ```terminal
    $ oc extract cm/worker-fileintegrity --keys=aide.conf
    ```

    This creates a file named `aide.conf` that you can edit. To illustrate how the Operator post-processes the paths, this example adds an exclude directory without the prefix:
    ```terminal
    $ vim aide.conf
    ```
    ```terminal title="Example output"
    /hostroot/etc/kubernetes/static-pod-resources
    !/hostroot/etc/kubernetes/aide.*
    !/hostroot/etc/kubernetes/manifests
    !/hostroot/etc/docker/certs.d
    !/hostroot/etc/selinux/targeted
    !/hostroot/etc/openvswitch/conf.db
    ```

    Exclude a path specific to control plane nodes:
    ```terminal
    !/opt/mydaemon/
    ```

    Store the other content in `/etc`:
    ```terminal
    /hostroot/etc/	CONTENT_EX
    ```
1.  Create a config map based on this file:
    ```terminal
    $ oc create cm master-aide-conf --from-file=aide.conf
    ```
1.  Define a `FileIntegrity` CR manifest that references the config map:
    ```yaml
    apiVersion: fileintegrity.openshift.io/v1alpha1
    kind: FileIntegrity
    metadata:
      name: master-fileintegrity
      namespace: openshift-file-integrity
    spec:
      nodeSelector:
          node-role.kubernetes.io/master: ""
      config:
          name: master-aide-conf
          namespace: openshift-file-integrity
    ```

    The Operator processes the provided config map file and stores the result in a config map with the same name as the `FileIntegrity` object:
    ```terminal
    $ oc describe cm/master-fileintegrity | grep /opt/mydaemon
    ```
    ```terminal title="Example output"
    !/hostroot/opt/mydaemon
    ```