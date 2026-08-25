{%- set _mod_docs_content_type = "PROCEDURE" %}
# Configuring a BFD profile {id="nw-metallb-configure-bfdprofile_{{ context }}"}

To achieve faster path failure detection for BGP sessions, configure a MetalLB BFD profile and associate it with a BGP peer. Establishing these profiles ensures that your network routing remains highly available and responsive by identifying connectivity issues more rapidly than standard protocols. {._abstract}

**Prerequisites**

*   Install the {{ oc_first }}.
*   Log in as a user with `cluster-admin` privileges.

**Procedure**

1.  Create a file, such as `bfdprofile.yaml`, with content like the following example:
    ```yaml
    apiVersion: metallb.io/v1beta1
    kind: BFDProfile
    metadata:
      name: doc-example-bfd-profile-full
      namespace: metallb-system
    spec:
      receiveInterval: 300
      transmitInterval: 300
      detectMultiplier: 3
      echoMode: false
      passiveMode: true
      minimumTtl: 254
    # ...
    ```
1.  Apply the configuration for the BFD profile:
    ```terminal
    $ oc apply -f bfdprofile.yaml
    ```