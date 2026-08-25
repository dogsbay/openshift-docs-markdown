{%- set _mod_docs_content_type = "SNIPPET" %}
```yaml
- fileName: StorageLVMOSubscriptionNS.yaml
  policyName: subscription-policies
- fileName: StorageLVMOSubscriptionOperGroup.yaml
  policyName: subscription-policies
- fileName: StorageLVMOSubscription.yaml
  spec:
    name: lvms-operator
    channel: stable-{{ product_version }}
  policyName: subscription-policies
```