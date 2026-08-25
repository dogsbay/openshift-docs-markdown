{%- set _mod_docs_content_type = "PROCEDURE" %}
# Creating a {{ product_title }} cluster using FIPS encryption in {{ cluster_manager_first }} {id="creating-cluster-with-fips-encryption-ui_{{ context }}"}

You can create a {{ product_title }} cluster with Federal Information Processing Standards (FIPS) encryption and a customer-provided KMS key in {{ cluster_manager_url }}. {._abstract}


:::note

{{ product_title }} does not automatically configure the `default` storage class to encrypt persistent volumes with the customer-provided KMS key. You can configure this in-cluster after installation.

:::


**Procedure**

1.  Log in to {{ cluster_manager_url }}.
1.  Configure your cluster until you reach the **Cluster settings** screen.
1.  Select **Enable FIPS cryptography** if you require your cluster to be FIPS validated.

    :::note

    If **Enable FIPS cryptography** is selected, **Enable additional etcd encryption** is enabled by default and cannot be disabled. You can select **Enable additional etcd encryption** without selecting **Enable FIPS cryptography**.
    
    :::

1.  Supply your configured KMS Amazon Resource Number (ARN) in the **Key ARN** field.
1.  Continue creating your FIPS-encrypted cluster.