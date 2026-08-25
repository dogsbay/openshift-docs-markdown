{%- set _mod_docs_content_type = "CONCEPT" %}
# Alternatives to storing administrator-level secrets in the kube-system project {id="installing-aws-manual-modes_{{ context }}"}

By default, administrator secrets are stored in the `kube-system` project. {._abstract}

If you configured the `credentialsMode` parameter in the `install-config.yaml` file to `Manual`, you must use one of the following alternatives:

*   To manage long-term cloud credentials manually, follow the procedure in "Manually creating long-term credentials".
*   To implement short-term credentials that are managed outside the cluster for individual components, follow the procedures in "Configuring an {{ aws_short }} cluster to use short-term credentials".