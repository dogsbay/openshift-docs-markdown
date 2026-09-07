{%- set _mod_docs_content_type = "REFERENCE" %}
# Querying user-defined labels and tags for {{ gcp_short }} {id="installing-gcp-querying-labels-tags-gcp_{{ context }}"}

After creating the {{ product_title }} cluster, you can query the labels and tags defined for {{ gcp_short }} resources in the `infrastructures.config.openshift.io/cluster` object to verify your labeling configuration or reference tag values during troubleshooting. {._abstract}

```yaml title="Sample infrastructure.yaml file"
apiVersion: config.openshift.io/v1
kind: Infrastructure
metadata:
 name: cluster
spec:
 platformSpec:
   type: GCP
status:
 infrastructureName: <cluster_id>
 platform: GCP
 platformStatus:
   gcp:
     resourceLabels:
     - key: <label_key>
       value: <label_value>
     resourceTags:
     - key: <tag_key_short_name>
       parentID: <OrganizationID/ProjectID>
       value: <tag_value_short_name>
   type: GCP
```

Where `<cluster_id>` is the cluster ID that is generated during cluster installation.

Along with the user-defined labels, resources have a label defined by the {{ product_title }}. The format of the {{ product_title }} labels is `kubernetes-io-cluster-<cluster_id>:owned`.