{%- set _mod_docs_content_type = "PROCEDURE" %}
# Enabling {{ aws_short }} PrivateLink for {{ hcp }} {id="hcp-aws-enable-private-link_{{ context }}"}

In order to provision {{ hcp }} on the {{ aws_first }} with PrivateLink, you need to enable {{ aws_short }} PrivateLink for {{ hcp }}. {._abstract}

**Procedure**

1.  Create an {{ aws_short }} credential secret for the HyperShift Operator and name it `hypershift-operator-private-link-credentials`. The secret must reside in the managed cluster namespace that is the namespace of the managed cluster being used as the management cluster. If you used `local-cluster`, create the secret in the `local-cluster` namespace.
1.  See the following table to confirm that the secret contains the required fields:
    **Required fields for the {{ aws_short }} secret**

    | Field name | Description | Optional or required |
    | --- | --- | --- |
    | `region` | Region for use with Private Link | Required |
    | `aws-access-key-id` | The credential access key id. | Required |
    | `aws-secret-access-key` | The credential access key secret. | Required |
1.  To create an {{ aws_short }} secret, run the following command:
    ```terminal
    $ oc create secret generic <secret_name> \
      --from-literal=aws-access-key-id=<aws_access_key_id> \
      --from-literal=aws-secret-access-key=<aws_secret_access_key> \
      --from-literal=region=<region> -n local-cluster
    ```
1.  Disaster recovery backup for the secret is not automatically enabled. Run the following command to add the label that enables the `hypershift-operator-private-link-credentials` secret to be backed up for disaster recovery:
    ```terminal
    $ oc label secret hypershift-operator-private-link-credentials \
      -n local-cluster \
      cluster.open-cluster-management.io/backup=""
    ```