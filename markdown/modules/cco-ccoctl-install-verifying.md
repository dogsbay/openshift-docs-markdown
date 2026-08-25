{%- set _mod_docs_content_type = "PROCEDURE" %}
# Verifying that a cluster uses short-term credentials {id="cco-ccoctl-install-verifying_{{ context }}"}

You can verify that a cluster uses short-term security credentials for individual components by checking the Cloud Credential Operator (CCO) configuration and other values in the cluster. {._abstract}

**Prerequisites**

*   You deployed an {{ product_title }} cluster using the Cloud Credential Operator utility (`ccoctl`) to implement short-term credentials.
*   You installed the {{ oc_first }}.
*   You are logged in as a user with `cluster-admin` privileges.

**Procedure**

*   Verify that the CCO is configured to operate in manual mode by running the following command:
    ```terminal
    $ oc get cloudcredentials cluster \
      -o=jsonpath={.spec.credentialsMode}
    ```

    The following output confirms that the CCO is operating in manual mode:
    ```text title="Example output"
    Manual
    ```
*   Verify that the cluster does not have `root` credentials by running the following command:
    ```terminal
    $ oc get secrets \
      -n kube-system <secret_name>
    ```

    where `<secret_name>` is the name of the root secret for your cloud provider.
    | Platform | Secret name |
    | --- | --- |
    | {{ aws_first }} | `aws-creds` |
    | {{ azure_first }} | `azure-credentials` |
    | {{ gcp_first }} | `gcp-credentials` |

    An error confirms that the root secret is not present on the cluster.
    ```text title="Example output for an {{ aws_short }} cluster"
    Error from server (NotFound): secrets "aws-creds" not found
    ```
*   Verify that the components are using short-term security credentials for individual components by running the following command:
    ```terminal
    $ oc get authentication cluster \
      -o jsonpath \
      --template='{ .spec.serviceAccountIssuer }'
    ```

    This command displays the value of the `.spec.serviceAccountIssuer` parameter in the cluster `Authentication` object.
    An output of a URL that is associated with your cloud provider indicates that the cluster is using manual mode with short-term credentials that are created and managed from outside of the cluster.
*   {{ azure_short }} clusters: Verify that the components are assuming the {{ azure_short }} client ID that is specified in the secret manifests by running the following command:
    ```terminal
    $ oc get secrets \
      -n openshift-image-registry installer-cloud-credentials \
      -o jsonpath='{.data}'
    ```

    An output that contains the `azure_client_id` and `azure_federated_token_file` fields confirms that the components are assuming the {{ azure_short }} client ID.
*   {{ azure_short }} clusters: Verify that the pod identity webhook is running by running the following command:
    ```terminal
    $ oc get pods \
      -n openshift-cloud-credential-operator
    ```
    ```text title="Example output"
    NAME                                         READY   STATUS    RESTARTS   AGE
    cloud-credential-operator-59cf744f78-r8pbq   2/2     Running   2          71m
    pod-identity-webhook-548f977b4c-859lz        1/1     Running   1          70m
    ```