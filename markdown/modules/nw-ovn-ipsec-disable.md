{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disabling IPsec encryption {id="nw-ovn-ipsec-disable_{{ context }}"}

To disable IPsec encryption in {{ product_title }}, you can patch the cluster `Network` custom resource and set `ipsecConfig` mode to `Disabled`. {._abstract}

**Prerequisites**

*   You installed the {{ oc_first }}.
*   You logged in to the cluster with a user with `cluster-admin` privileges.

**Procedure**

1.  Choose one of the following options to disable IPsec encryption:
    1.  Where the `ipsecConfig.mode` parameter is set to either `External` or `Full` and the `ipsecConfig.full` schema is not added to `networks.operator.openshift.io`, enter the following command:
        ```terminal
        $ oc patch networks.operator.openshift.io cluster --type=merge -p \
          '{
          "spec":{
            "defaultNetwork":{
              "ovnKubernetesConfig":{
                "ipsecConfig":{
                  "mode":"Disabled"
                }}}}}'
        ```
    1.  Where the `ipsecConfig.mode` parameter is set to `Full` and the `ipsecConfig.full` configuration is added to `networks.operator.openshift.io`, enter the following command:
        ```terminal
        $ oc patch networks.operator.openshift.io cluster --type='json' -p \
              '[{"op": "remove", "path": "/spec/defaultNetwork/ovnKubernetesConfig/ipsecConfig/full"}, 
              {"op": "replace", "path": "/spec/defaultNetwork/ovnKubernetesConfig/ipsecConfig/mode", "value": "Disabled"}]'
        ```
1.  Optional: You can increase the size of your cluster MTU by `46` bytes because there is no longer any overhead from the IPsec Encapsulating Security Payload (ESP) header in IP packets.