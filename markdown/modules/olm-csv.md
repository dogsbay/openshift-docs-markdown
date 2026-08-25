{%- set _mod_docs_content_type = "CONCEPT" %}
# Cluster service version {id="olm-csv_{{ context }}"}

A cluster service version (CSV) is a YAML manifest that represents a specific version of a running Operator on your {{ product_title }} cluster. OLM uses CSV metadata to run Operators safely and determine how to apply upgrades when new versions are published. {._abstract}

A CSV includes the metadata that accompanies an Operator container image, used to populate user interfaces with information such as its name, version, description, labels, repository link, and logo.

A CSV is also a source of technical information required to run the Operator, such as which custom resources (CRs) it manages or depends on, RBAC rules, cluster requirements, and install strategies. This information tells OLM how to create required resources and set up the Operator as a deployment.