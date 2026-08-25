{%- set _mod_docs_content_type = "PROCEDURE" %}
# Describing a pod {id="troubleshooting-general-describe-pod_{{ context }}"}

To troubleshoot pod issues and view detailed information about a pod in {{ product_title }}, you can describe a pod using the `oc describe pod` command. The **Events** section in the output provides detailed information about the pod and the containers inside of it. {._abstract}

**Procedure**

*   Describe a pod by running the following command:
    ```terminal
    $ oc describe pod -n <namespace> busybox-1
    ```
    ```terminal title="Example output"
    Name:             busybox-1
    Namespace:        busy
    Priority:         0
    Service Account:  default
    Node:             worker-3/192.168.0.0
    Start Time:       Mon, 27 Nov 2023 14:41:25 -0500
    Labels:           app=busybox
                      pod-template-hash=<hash>
    Annotations:      k8s.ovn.org/pod-networks:
    …
    Events:
      Type    Reason   Age                   From     Message
      ----    ------   ----                  ----     -------
      Normal  Pulled   41m (x170 over 7d1h)  kubelet  Container image "quay.io/quay/busybox:latest" already present on machine
      Normal  Created  41m (x170 over 7d1h)  kubelet  Created container busybox
      Normal  Started  41m (x170 over 7d1h)  kubelet  Started container busybox
    ```