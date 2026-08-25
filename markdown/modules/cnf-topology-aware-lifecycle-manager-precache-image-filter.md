{%- set _mod_docs_content_type = "CONCEPT" %}
# Using the container image pre-cache filter {id="talo-precache-feature-image-filter_{{ context }}"}

The pre-cache feature typically downloads more images than a cluster needs for an update. You can control which pre-cache images are downloaded to a cluster. This decreases download time, and saves bandwidth and storage. {._abstract}

You can see a list of all images to be downloaded using the following command:

```terminal
$ oc adm release info <ocp-version>
```

The following `ConfigMap` example shows how you can exclude images using the `excludePrecachePatterns` field.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: cluster-group-upgrade-overrides
data:
  excludePrecachePatterns: |
    azure
    aws
    vsphere
    alibaba
```

{{ cgu_operator }} excludes all images with names that include any of the patterns listed here.