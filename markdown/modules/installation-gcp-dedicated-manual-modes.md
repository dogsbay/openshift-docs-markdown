{%- set _mod_docs_content_type = "CONCEPT" %}
# Alternatives to storing administrator-level secrets in the kube-system project {id="installing-gcp-dedicated-manual-modes_{{ context }}"}

By default, administrator secrets are stored in the `kube-system` project. If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must manage long-term cloud credentials manually.