{%- set _mod_docs_content_type = "CONCEPT" %}
# Back up etcd data for {{ hcp }} by using the etcd snapshot method {id="backup-etcd-data-for-hosted-control-planes-using-etcd-snapshot-intro_{{ context }}"}

To back up etcd data for {{ hcp }}, you can use the default volume snapshot approach, or you can take the etcd snapshot approach, which results in smaller backup artifacts. {._abstract}

{%- set FeatureName = "The etcd snapshot method" %}
{% include "./snippets/technology-preview.md" %}