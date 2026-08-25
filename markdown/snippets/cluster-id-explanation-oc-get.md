{%- set _mod_docs_content_type = "SNIPPET" %}

In the following example, the `<cluster_id>` string is the infrastructure ID.
The infrastructure ID matches the cluster ID that the installation program used during cluster provisioning.
If you have the {{ oc_first }} installed, you can obtain the infrastructure ID by running the following command:

```terminal
$ oc get -o jsonpath='{.status.infrastructureName}{"\n"}' infrastructure cluster
```