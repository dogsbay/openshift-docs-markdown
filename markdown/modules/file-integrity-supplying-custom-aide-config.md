{%- set _mod_docs_content_type = "CONCEPT" %}
# Supplying a custom AIDE configuration {id="file-integrity-operator-supplying-custom-aide-config_{{ context }}"}

Any entries that configure AIDE internal behavior such as `DBDIR`, `LOGDIR`, `database`, and `database_out` are overwritten by the Operator. The Operator adds a prefix to `/hostroot/` before all paths to be watched for integrity changes. As a result, you can reuse existing AIDE configs that might not be tailored for a containerized environment and that start from the root directory. {._abstract}


:::note

`/hostroot` is the directory where the pods running AIDE mount the host file system. Changing the configuration triggers a reinitializing of the database.

:::