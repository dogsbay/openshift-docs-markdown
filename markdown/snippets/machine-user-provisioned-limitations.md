{%- set _mod_docs_content_type = "SNIPPET" %}


:::important

You can use the advanced machine management and scaling capabilities only in clusters where the Machine API is operational. Clusters with user-provisioned infrastructure require additional validation and configuration to use the Machine API.

Clusters with the infrastructure platform type `none` cannot use the Machine API. This limitation applies even if the compute machines that are attached to the cluster are installed on a platform that supports the feature. This parameter cannot be changed after installation.

To view the platform type for your cluster, run the following command:

```terminal
$ oc get infrastructure cluster -o jsonpath='{.status.platform}'
```

:::