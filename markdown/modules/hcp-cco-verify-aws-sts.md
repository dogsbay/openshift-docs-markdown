{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying the CCO installation in a hosted cluster on {{ aws_short }} {id="hcp-cco-verify-aws-sts_{{ context }}"}

You can verify that the Cloud Credential Operator (CCO) is running correctly in your hosted control plane. {._abstract}

**Prerequisites**

*   You configured the hosted cluster on {{ aws_first }}.

**Procedure**

1.  Verify that the CCO is configured in a manual mode in your hosted cluster by running the following command:
    ```terminal
    $ oc get cloudcredentials <hosted_cluster_name> \
      -n <hosted_cluster_namespace> \
      -o=jsonpath={.spec.credentialsMode}
    ```
    ```terminal title="Expected output"
    Manual
    ```
1.  Verify that the value for the `serviceAccountIssuer` resource is not empty by running the following command:
    ```terminal
    $ oc get authentication cluster --kubeconfig <hosted_cluster_name>.kubeconfig \
      -o jsonpath --template '{.spec.serviceAccountIssuer }'
    ```
    ```terminal title="Example output"
    https://aos-hypershift-ci-oidc-29999.s3.us-east-2.amazonaws.com/hypershift-ci-29999
    ```