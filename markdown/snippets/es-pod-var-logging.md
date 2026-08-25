{%- set _mod_docs_content_type = "SNIPPET" %}


:::tip

Some commands in this documentation reference an Elasticsearch pod by using a `$ES_POD_NAME` shell variable. If you want to copy and paste the commands directly from this documentation, you must set this variable to a value that is valid for your Elasticsearch cluster.

You can list the available Elasticsearch pods by running the following command:

```terminal
$ oc -n openshift-logging get pods -l component=elasticsearch
```

Choose one of the pods listed and set the `$ES_POD_NAME` variable, by running the following command:

```terminal
$ export ES_POD_NAME=<elasticsearch_pod_name>
```

You can now use the `$ES_POD_NAME` variable in commands.

:::