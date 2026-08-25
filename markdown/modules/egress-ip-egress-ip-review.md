{%- set _mod_docs_content_type = "PROCEDURE" %}
# Review the egress IPs {id="cloud-experts-consistent-egress-ip-egress-ip-review_{{ context }}"}

Review egress IP assignments to verify that each egress IP address is correctly assigned to a node. {._abstract}

**Procedure**

*   Review the egress IP assignments by running the following command:
    ```terminal
    $ oc get egressips
    ```
    ```terminal title="Example output"
    NAME              EGRESSIPS       ASSIGNED NODE                   ASSIGNED EGRESSIPS
    demo-egress-ns    10.10.100.253   ip-10-10-156-122.ec2.internal   10.10.150.253
    demo-egress-pod   10.10.100.254   ip-10-10-156-122.ec2.internal   10.10.150.254
    ```