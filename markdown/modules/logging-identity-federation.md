{%- set _mod_docs_content_type = "PROCEDURE" %}
# Workload identity federation {id="logging-identity-federation_{{ context }}"}
Workload identity federation enables authentication to cloud-based log stores using short-lived tokens.

**Prerequisites**

*   {{ product_title }} 4.14 and later
*   {{ logging_uc }} 5.9 and later

**Procedure**

*   If you use the {{ product_title }} web console to install the {{ loki_op }}, clusters that use short-lived tokens are automatically detected. You are prompted to create roles and supply the data required for the {{ loki_op }} to create a `CredentialsRequest` object, which populates a secret.
*   If you use the {{ oc_first }} to install the {{ loki_op }}, you must manually create a subscription object using the appropriate template for your storage provider, as shown in the following examples. This authentication strategy is only supported for the storage providers indicated.

```yaml title="Azure sample subscription"
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: loki-operator
  namespace: openshift-operators-redhat
spec:
  channel: "stable-5.9"
  installPlanApproval: Manual
  name: loki-operator
  source: redhat-operators
  sourceNamespace: openshift-marketplace
  config:
    env:
      - name: CLIENTID
        value: <your_client_id>
      - name: TENANTID
        value: <your_tenant_id>
      - name: SUBSCRIPTIONID
        value: <your_subscription_id>
      - name: REGION
        value: <your_region>
```

```yaml title="AWS sample subscription"
apiVersion: operators.coreos.com/v1alpha1
kind: Subscription
metadata:
  name: loki-operator
  namespace: openshift-operators-redhat
spec:
  channel: "stable-5.9"
  installPlanApproval: Manual
  name: loki-operator
  source: redhat-operators
  sourceNamespace: openshift-marketplace
  config:
    env:
    - name: ROLEARN
      value: <role_ARN>
```