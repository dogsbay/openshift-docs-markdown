{%- set _mod_docs_content_type = "PROCEDURE" %}
# Updating the IAM role ARN in the {{ oadp_short }} Operator subscription {id="updating-role-arn-oadp-rosa-sts_{{ context }}"}

Update the {{ oadp_short }} Operator subscription to fix an installation error due to incorrect IAM role Amazon Resource Name (ARN). {._abstract}

While installing the {{ oadp_short }} Operator on a
{%- if not (openshift_rosa or openshift_rosa_hcp) %}
ROSA Security Token Service (STS)
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
{{ product_title }}
{%- endif %}
cluster, if you provide an incorrect IAM role Amazon Resource Name (ARN), the `openshift-adp-controller` pod gives an error. The credential requests that are generated contain the wrong IAM role ARN. To update the credential requests object with the correct IAM role ARN, you can edit the {{ oadp_short }} Operator subscription and patch the IAM role ARN with the correct value. By editing the {{ oadp_short }} Operator subscription, you do not have to uninstall and reinstall {{ oadp_short }} to update the IAM role ARN.

**Prerequisites**

{% if openshift_enterprise %}
*   You have a {{ product_rosa }} STS cluster with the required access and tokens.
*   You have installed {{ oadp_short }} on the ROSA STS cluster.
{% endif %}
{% if openshift_rosa or openshift_rosa_hcp %}
*   You have a {{ product_title }} cluster with the required access and tokens.
*   You have installed {{ oadp_short }} on the {{ product_title }} cluster.
{% endif %}

**Procedure**

1.  To verify that the {{ oadp_short }} subscription has the wrong IAM role ARN environment variable set, run the following command:
    ```terminal
    $ oc get sub -o yaml redhat-oadp-operator
    ```
    ```yaml title="Example subscription"
    apiVersion: operators.coreos.com/v1alpha1
    kind: Subscription
    metadata:
      annotations:
      creationTimestamp: "2025-01-15T07:18:31Z"
      generation: 1
      labels:
        operators.coreos.com/redhat-oadp-operator.openshift-adp: ""
      name: redhat-oadp-operator
      namespace: openshift-adp
      resourceVersion: "77363"
      uid: 5ba00906-5ad2-4476-ae7b-ffa90986283d
    spec:
      channel: stable-1.4
      config:
        env:
        - name: ROLEARN
          value: arn:aws:iam::11111111:role/wrong-role-arn
      installPlanApproval: Manual
      name: redhat-oadp-operator
      source: prestage-operators
      sourceNamespace: openshift-marketplace
      startingCSV: oadp-operator.v1.4.2
    ```

    where:

    `ROLEARN`
    :   Verify the value of `ROLEARN` you want to update.

1.  Update the `ROLEARN` field of the subscription with the correct role ARN by running the following command:
    ```terminal
    $ oc patch subscription redhat-oadp-operator -p '{"spec": {"config": {"env": [{"name": "ROLEARN", "value": "<role_arn>"}]}}}' --type='merge'
    ```

    where:

    `<role_arn>`
    :   Specifies the IAM role ARN to be updated. For example, `arn:aws:iam::160.....6956:role/oadprosa.....8wlf`.

1.  Verify that the `secret` object is updated with correct role ARN value by running the following command:
    ```terminal
    $ oc get secret cloud-credentials -o jsonpath='{.data.credentials}' | base64 -d
    ```
    ```terminal title="Example output"
    [default]
    sts_regional_endpoints = regional
    role_arn = arn:aws:iam::160.....6956:role/oadprosa.....8wlf
    web_identity_token_file = /var/run/secrets/openshift/serviceaccount/token
    ```
1.  Configure the `DataProtectionApplication` custom resource (CR) manifest file as shown in the following example:
    ```yaml
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    metadata:
      name: test-rosa-dpa
      namespace: openshift-adp
    spec:
      backupLocations:
      - bucket:
          config:
            region: us-east-1
          cloudStorageRef:
            name: <cloud_storage>
          credential:
            name: cloud-credentials
            key: credentials
          prefix: velero
          default: true
      configuration:
        velero:
          defaultPlugins:
          - aws
          - openshift
    ```

    where:

    `<cloud_storage>`
    :   Specifies the `CloudStorage` CR.

1.  Create the `DataProtectionApplication` CR by running the following command:
    ```terminal
    $ oc create -f <dpa_manifest_file>
    ```
1.  Verify that the `DataProtectionApplication` CR is reconciled and the `status` is set to `"True"` by running the following command:
    ```terminal
    $  oc get dpa -n openshift-adp -o yaml
    ```
    ```yaml title="Example DataProtectionApplication"
    apiVersion: oadp.openshift.io/v1alpha1
    kind: DataProtectionApplication
    ...
    status:
        conditions:
        - lastTransitionTime: "2023-07-31T04:48:12Z"
          message: Reconcile complete
          reason: Complete
          status: "True"
          type: Reconciled
    ```
1.  Verify that the `BackupStorageLocation` CR is in an available state by running the following command:
    ```terminal
    $ oc get {{ oadp_bsl_api }} -n openshift-adp
    ```
    ```terminal title="Example BackupStorageLocation"
    NAME       PHASE       LAST VALIDATED   AGE   DEFAULT
    ts-dpa-1   Available   3s               6s    true
    ```