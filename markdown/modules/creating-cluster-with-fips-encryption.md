{%- set _mod_docs_content_type = "CONCEPT" %}
# Creating a {{ product_title }} cluster using FIPS encryption {id="creating-cluster-with-fips-encryption_{{ context }}"}

You can create a {{ product_title }} cluster with Federal Information Processing Standards (FIPS) encryption and a customer-provided KMS key for node root volumes, the etcd database, or both. A different KMS key ARN can be provided for each option. {._abstract}


:::note

{{ product_title }} does not automatically configure the `default` storage class to encrypt persistent volumes with the customer-provided KMS key. You can configure this in-cluster after installation.

:::