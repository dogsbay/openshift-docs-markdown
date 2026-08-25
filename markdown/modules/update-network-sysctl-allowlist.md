{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the interface-specific safe sysctls list {id="updating-interface-specific-safe-sysctls-list_{{ context }}"}

You can modify the default list of safe interface-specific `sysctls` by updating the `cni-sysctl-allowlist` in the `openshift-multus` namespace. {._abstract}

{%- set FeatureName = "The support for updating the interface-specific safe sysctls list" %}
{% leveloffset +1 %}{% include "./snippets/technology-preview.md" %}{% endleveloffset %}

For example, the following procedure modifies the predefined list of safe `sysctls` to add sysctls that allow users to enforce stricter reverse path forwarding for IPv4. For more information on reverse path forwarding see Reverse Path Forwarding.

**Procedure**

1.  View the existing predefined list by running the following command:
    ```terminal
    $ oc get cm -n openshift-multus cni-sysctl-allowlist -oyaml
    ```
    ```terminal title="Expected output" {minja}
    apiVersion: v1
    data:
      allowlist.conf: |-
        ^net.ipv4.conf.IFNAME.accept_redirects$
        ^net.ipv4.conf.IFNAME.accept_source_route$
        ^net.ipv4.conf.IFNAME.arp_accept$
        ^net.ipv4.conf.IFNAME.arp_notify$
        ^net.ipv4.conf.IFNAME.disable_policy$
        ^net.ipv4.conf.IFNAME.secure_redirects$
        ^net.ipv4.conf.IFNAME.send_redirects$
        ^net.ipv6.conf.IFNAME.accept_ra$
        ^net.ipv6.conf.IFNAME.accept_redirects$
        ^net.ipv6.conf.IFNAME.accept_source_route$
        ^net.ipv6.conf.IFNAME.arp_accept$
        ^net.ipv6.conf.IFNAME.arp_notify$
        ^net.ipv6.neigh.IFNAME.base_reachable_time_ms$
        ^net.ipv6.neigh.IFNAME.retrans_time_ms$
    kind: ConfigMap
    metadata:
      annotations:
        kubernetes.io/description: |
          Sysctl allowlist for nodes.
        release.openshift.io/version: {{ product_version }}.0-0.nightly-2022-11-16-003434
      creationTimestamp: "2022-11-17T14:09:27Z"
      name: cni-sysctl-allowlist
      namespace: openshift-multus
      resourceVersion: "2422"
      uid: 96d138a3-160e-4943-90ff-6108fa7c50c3
    ```
1.  Edit the list by using the following command:
    ```terminal
    $ oc edit cm -n openshift-multus cni-sysctl-allowlist -oyaml
    ```
1.  Add the `^net.ipv4.conf.IFNAME.rp_filter$` and `^net.ipv6.conf.IFNAME.rp_filter$` fields to the list of parameters to allow users to implement stricter reverse path forwarding.
    ```terminal
    # Please edit the object below. Lines beginning with a '#' will be ignored,
    # and an empty file will abort the edit. If an error occurs while saving this file will be
    # reopened with the relevant failures.
    #
    apiVersion: v1
    data:
      allowlist.conf: |-
        ^net.ipv4.conf.IFNAME.accept_redirects$
        ^net.ipv4.conf.IFNAME.accept_source_route$
        ^net.ipv4.conf.IFNAME.arp_accept$
        ^net.ipv4.conf.IFNAME.arp_notify$
        ^net.ipv4.conf.IFNAME.disable_policy$
        ^net.ipv4.conf.IFNAME.secure_redirects$
        ^net.ipv4.conf.IFNAME.send_redirects$
        ^net.ipv4.conf.IFNAME.rp_filter$
        ^net.ipv6.conf.IFNAME.accept_ra$
        ^net.ipv6.conf.IFNAME.accept_redirects$
        ^net.ipv6.conf.IFNAME.accept_source_route$
        ^net.ipv6.conf.IFNAME.arp_accept$
        ^net.ipv6.conf.IFNAME.arp_notify$
        ^net.ipv6.neigh.IFNAME.base_reachable_time_ms$
        ^net.ipv6.neigh.IFNAME.retrans_time_ms$
        ^net.ipv6.conf.IFNAME.rp_filter$
    ```
1.  Save the changes to the file and exit.

    :::note

    The removal of `sysctls` is also supported. Edit the file, remove the `sysctl` or `sysctls` then save the changes and exit.
    
    :::


**Verification**

1.  Create a network attachment definition, such as `reverse-path-fwd-example.yaml`, with the following content:
    ```yaml
    apiVersion: "k8s.cni.cncf.io/v1"
    kind: NetworkAttachmentDefinition
    metadata:
      name: tuningnad
      namespace: default
    spec:
      config: '{
        "cniVersion": "0.4.0",
        "name": "tuningnad",
        "plugins": [{
          "type": "bridge"
          },
          {
          "type": "tuning",
          "sysctl": {
             "net.ipv4.conf.IFNAME.rp_filter": "1"
            }
        }
      ]
    }'
    ```
1.  Apply the yaml by running the following command:
    ```terminal
    $ oc apply -f reverse-path-fwd-example.yaml
    ```
    ```terminal title="Example output"
    networkattachmentdefinition.k8.cni.cncf.io/tuningnad created
    ```
1.  Create a pod such as `examplepod.yaml` using the following YAML:
    ```yaml
    apiVersion: v1
    kind: Pod
    metadata:
      name: example
      labels:
        app: httpd
      namespace: default
      annotations:
        k8s.v1.cni.cncf.io/networks: tuningnad
    spec:
      securityContext:
        runAsNonRoot: true
        seccompProfile:
          type: RuntimeDefault
      containers:
        - name: httpd
          image: 'image-registry.openshift-image-registry.svc:5000/openshift/httpd:latest'
          ports:
            - containerPort: 8080
          securityContext:
            allowPrivilegeEscalation: false
            capabilities:
              drop:
                - ALL
    ```

    where:

    `metadata.annotations`
    :   Specifies the name of the configured `NetworkAttachmentDefinition`.

1.  Apply the YAML by running the following command:
    ```terminal
    $ oc apply -f examplepod.yaml
    ```
1.  Verify that the pod is created by running the following command:
    ```terminal
    $ oc get pod
    ```
    ```terminal title="Example output"
    NAME      READY   STATUS    RESTARTS   AGE
    example   1/1     Running   0          47s
    ```
1.  Log in to the pod by running the following command:
    ```terminal
    $ oc rsh example
    ```
1.  Verify the value of the configured sysctl flag. For example, find the value `net.ipv4.conf.net1.rp_filter` by running the following command:
    ```terminal
    sh-4.4# sysctl net.ipv4.conf.net1.rp_filter
    ```
    ```terminal title="Expected output"
    net.ipv4.conf.net1.rp_filter = 1
    ```