{%- set _mod_docs_content_type = "CONCEPT" %}
# Tutorial: Use AWS Secrets Manager CSI for your application {id="rosa-classic-tutorial-use-aws-secrets-manager-csi-for-your-application_{{ context }}"}

The AWS Secrets and Configuration Provider (ASCP) provides a way to expose AWS Secrets as Kubernetes storage volumes. {._abstract}

With the ASCP, you can store and manage your secrets in Secrets Manager and then securely retrieve them through your {{ product_title }} workloads without hardcoding sensitive data in application configurations.