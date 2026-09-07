{%- set _mod_docs_content_type = "CONCEPT" %}
# Alternatives to storing administrator-level secrets in the kube-system project {id="installing-gcp-manual-modes_{{ context }}"}

By default, {{ product_title }} stores administrator secrets in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must configure an alternative credential management strategy by using either long-term manual credentials or short-term credentials that are managed outside the cluster. {._abstract}

*   To manage long-term cloud credentials manually, follow the procedure in "Manually creating long-term credentials".
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in "Short-term credential configuration for a {{ gcp_short }} cluster".