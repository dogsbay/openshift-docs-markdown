{%- set _mod_docs_content_type = "REFERENCE" %}
# Secrets management Operators in {{ product_title }} {id="secrets-management-operators_{{ context }}"}

{{ product_title }} offers a suite of supported Operators designed to secure and automate the management of sensitive data, such as external credentials and digital certificates. Each secrets management Operator provides quick starts and sample YAML manifests to streamline the onboarding process. These tools simplify installation and deployment, and help you build complex custom resources by using pre-defined YAML snippets. The following list details the key Operators available for these tasks: {._abstract}

*   **{{ secrets_store_driver }}**: Enables Kubernetes to connect to external systems, and mount credentials from the external system into an application workload.
*   **{{ external_secrets_operator }}**: Retrieves credentials stored in external management systems and makes them available within {{ product_title }} as standard Kubernetes Secrets.
*   **{{ cert_manager_operator }}**: Manages the lifecycle of digital certificates that are used by applications running on {{ product_title }} by automating the process of issuance and renewal.