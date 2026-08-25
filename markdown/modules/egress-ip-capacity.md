{%- set _mod_docs_content_type = "PROCEDURE" %}
# Ensure IP address capacity {id="cloud-experts-consistent-egress-ip-capacity_{{ context }}"}

Confirm that your nodes have available IP address capacity. Each public cloud provider limits the number of IP addresses that you can assign to each node. {._abstract}

**Procedure**

*   Verify sufficient capacity by running the following command:
    ```terminal
    $ oc get node -o json | \
        jq '.items[] |
            {
                "name": .metadata.name,
                "ips": (.status.addresses | map(select(.type == "InternalIP") | .address)),
                "capacity": (.metadata.annotations."cloud.network.openshift.io/egress-ipconfig" | fromjson[] | .capacity.ipv4)
            }'
    ```
    ```terminal title="Example output"
    {
      "name": "ip-10-10-145-88.ec2.internal",
      "ips": [
        "10.10.145.88"
      ],
      "capacity": 14
    }
    {
      "name": "ip-10-10-154-175.ec2.internal",
      "ips": [
        "10.10.154.175"
      ],
      "capacity": 14
    }
    ```