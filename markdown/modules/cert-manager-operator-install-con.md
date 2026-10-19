{%- set _mod_docs_content_type = "CONCEPT" %}
# Installing the {{ cert_manager_operator }} {id="cert-manager-operator-install-con_{{ context }}"}

The {{ cert_manager_operator }} is not installed in {{ product_title }} by default. You can install the {{ cert_manager_operator }} by using the web console and command-line interface (CLI). {._abstract}

The {{ cert_manager_operator }} sets the `features.operators.openshift.io/token-auth-aws`, `features.operators.openshift.io/token-auth-azure`, and `features.operators.openshift.io/token-auth-gcp` annotations in the `ClusterServiceVersion` custom resource of the Operator. The {{ product_title }} web console requires the credential details when these annotations are set. Currently, the Operator does not use the values collected by the OpenShift web console and you can provide any value when asked for the input. For example, when installing on the managed {{ product_title }} cluster, the `identity-provider-arn` is asked and any value can be provided to proceed.


:::important

The {{ cert_manager_operator }} version 1.15 or later supports the `AllNamespaces`, `SingleNamespace`, and `OwnNamespace` installation modes. Earlier versions, such as 1.14, support only the `SingleNamespace` and `OwnNamespace` installation modes.

:::