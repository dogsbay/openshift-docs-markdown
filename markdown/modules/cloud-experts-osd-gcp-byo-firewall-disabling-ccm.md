{%- set _mod_docs_content_type = "PROCEDURE" %}
# Disable Cloud Controller Manager firewall management {id="cloud-experts-osd-gcp-byo-firewall-disabling-ccm_{{ context }}"}

With bring your own (BYO) firewall rules, you own every firewall rule for your cluster. Configure the Cloud Controller Manager (CCM) so that it no longer creates or deletes firewall rules when you create or delete `LoadBalancer` services. The CCM continues to manage load balancer resources such as forwarding rules and target pools, so this change affects firewall operations only. {._abstract}

The CCM reads its cloud config from the `cloud-conf` config map in the `openshift-cloud-controller-manager` namespace. A sync controller manages this config map. If you patch the config map directly, the sync controller reverts your change within seconds.

Patch the source config map instead. Changes propagate automatically through the following three-stage sync chain:

1.  `openshift-config/cloud-provider-config` (key: `config`)
1.  `openshift-config-managed/kube-cloud-config` (key: `cloud.conf`)
1.  `openshift-cloud-controller-manager/cloud-conf` (key: `cloud.conf`)

**Prerequisites**

*   You deleted the platform-managed firewall rules.
*   You have the `jq` CLI installed.

**Procedure**

1.  Read the current cloud config:
    ```terminal
    $ CURRENT_CONFIG=$(oc get configmap cloud-provider-config -n openshift-config \
      -o jsonpath='{.data.config}')
    ```
1.  Set `firewall-rules-management` to `Disabled`. The following command removes any existing `firewall-rules-management` entry and appends a disabled entry:
    ```terminal
    $ NEW_CONFIG=$(printf '%s\n  firewall-rules-management = Disabled\n' \
      "$(echo "$CURRENT_CONFIG" | grep -v 'firewall-rules-management')")
    ```
1.  Patch the new config back into the source config map:
    ```terminal
    $ oc patch configmap cloud-provider-config -n openshift-config \
      --type merge \
      --patch "$(jq -n --arg config "$NEW_CONFIG" '{data: {config: $config}}')"
    ```
1.  Wait about 30 seconds for the sync controllers to propagate the change.
1.  Restart the CCM pods to pick up the new config:
    ```terminal
    $ oc delete pods -n openshift-cloud-controller-manager \
      -l k8s-app=gcp-cloud-controller-manager
    ```

**Verification**

1.  Verify that the flag propagated to the source config map:
    ```terminal
    $ oc get cm cloud-provider-config -n openshift-config \
      -o jsonpath='{.data.config}' | grep firewall
    ```
    ```terminal title="Example output"
    firewall-rules-management = Disabled
    ```
1.  Verify that the flag propagated to the intermediate config map:
    ```terminal
    $ oc get cm kube-cloud-config -n openshift-config-managed \
      -o jsonpath='{.data.cloud\.conf}' | grep firewall
    ```
    ```terminal title="Example output"
    firewall-rules-management = Disabled
    ```
1.  Verify that the flag propagated to the CCM config map:
    ```terminal
    $ oc get cm cloud-conf -n openshift-cloud-controller-manager \
      -o jsonpath='{.data.cloud\.conf}' | grep firewall
    ```
    ```terminal title="Example output"
    firewall-rules-management = Disabled
    ```
1.  Check the CCM logs for the disabled flag:
    ```terminal
    $ oc logs -n openshift-cloud-controller-manager \
      -l k8s-app=gcp-cloud-controller-manager --tail=50 | grep -i firewall
    ```

    Log entries that contain `firewall rules are unmanaged` confirm that the CCM skips firewall operations. The exact function names and message format can vary across {{ product_title }} versions.