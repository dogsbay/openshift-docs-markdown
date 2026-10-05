{%- set _mod_docs_content_type = "PROCEDURE" %}
# Installing the BGP Cloud Connector Operator {id="nw-installing-bgp-cco_{{ context }}"}

You can install the BGP Cloud Connector Operator on an {{ product_title }} cluster by using either the {{ oc_first }} or the web console.
After you install the Operator, you can deploy the Operator through the {{ olm_first }}. {._abstract}

**Procedure**

1.  To install the BGP Cloud Connector Operator by using the {{ oc_first }}, complete the following steps:
    1.  Create a dedicated namespace and an `OperatorGroup` manifest file for the BGP Cloud Connector Operator by entering the following command:
        ```terminal
        $ oc create namespace bgp-cloud-connector
        ```
    1.  Create an `OperatorGroup` manifest file in the dedicated namespace by entering the following command:
        ```terminal
        $ echo '{"apiVersion":"operators.coreos.com/v1","kind":"OperatorGroup","metadata":{"name":"bgp-cloud-connector-operatorgroup","namespace":"bgp-cloud-connector"}, "spec":{"targetNamespaces":["bgp-cloud-connector"]}}' | oc apply -f -
        ```
    1.  Configure {{ aws_short }} authentication for the Operator based on the credential mode of your cluster. The Cloud Credential Operator (CCO) automatically manages {{ aws_short }} credentials for the Operator based on the credential mode of your cluster.
{% if not openshift_rosa_hcp %}
        *   Mint Mode: No manual credential setup is required.
        CCO automatically creates an IAM user with the necessary permissions and populates the required secret in the namespace of the Operator.
        *   Manual or STS Mode: Pass your pre-created IAM role ARN to the Operator by using the `ROLEARN` environment variable. CCO updates the `CredentialsRequest` and provisions a secret containing the projected web identity token.
{% endif %}
{% if openshift_rosa_hcp %}
        *   STS Mode: Pass your pre-created IAM role ARN to the Operator by setting the `ROLEARN` environment variable in the `Subscription` custom resource (CR) or specifying it in the Role ARN field in the web console.
{% endif %}

            If you are deploying the Operator manually through a `Subscription` CR, set the `ROLEARN` environment variable in your manifest:
            ```yaml
            apiVersion: operators.coreos.com/v1alpha1
            kind: Subscription
            metadata:
              name: bgp-cloud-connector-operator
              namespace: bgp-cloud-connector
            spec:
              channel: stable
              name: bgp-cloud-connector
              source: redhat-operators
              sourceNamespace: openshift-marketplace
              config:
                env:
                  - name: ROLEARN
                    value: arn:aws:iam::<aws_account_id>:role/<iam_role_name>
            ```

            :::note

            If you install the Operator by using the web console, the console automatically prompts you for the `Role ARN` and then populates `ROLEARN` for you.

            You must create the IAM role in {{ aws_short }} before setting `ROLEARN`.
            The Operator cannot generate its own IAM role.
            Ensure the trust policy of the role trusts the OIDC provider of your cluster.
            
            :::

    1.  Verify that the Operator installation succeeded by entering the following command:
        ```terminal
        $ oc get csv -n bgp-cloud-connector
        ```

        Confirm that the `PHASE` column displays `Succeeded`.
1.  To install BGP Cloud Connector Operator by using the web console, complete the following steps:
    1.  Log in to the web console as a cluster administrator.
    1.  Go to **Ecosystem** → **Software Catalog**
    1.  Search for `BGP cloud connector`.
    1.  Click the **Install** button.
    1.  Select `bgp-cloud-connector` as the namespace.
    1.  Click the **Install** button.