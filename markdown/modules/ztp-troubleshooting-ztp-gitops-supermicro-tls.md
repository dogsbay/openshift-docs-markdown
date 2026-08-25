{%- set _mod_docs_content_type = "PROCEDURE" %}
# Troubleshooting {{ ztp }} virtual media booting on SuperMicro servers {id="ztp-troubleshooting-ztp-gitops-supermicro-tls_{{ context }}"}

SuperMicro X11 servers do not support virtual media installations when the image is served using the `https` protocol. As a result, {{ sno }} deployments for this environment fail to boot on the target node. To avoid this issue, log in to the hub cluster and disable Transport Layer Security (TLS) in the `Provisioning` resource. This ensures the image is not served with TLS even though the image address uses the `https` scheme.  {._abstract}

**Prerequisites**

*   You have installed the OpenShift CLI (`oc`).
*   You have logged in to the hub cluster as a user with `cluster-admin` privileges.

**Procedure**

1.  Disable TLS in the `Provisioning` resource by running the following command: 
    ```terminal
    $ oc patch provisioning provisioning-configuration --type merge -p '{"spec":{"disableVirtualMediaTLS": true}}'
    ```
1.  Continue the steps to deploy your {{ sno }} cluster.