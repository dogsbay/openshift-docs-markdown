{%- set _mod_docs_content_type = "REFERENCE" %}

# Querying Loki {id="logging-logcli-about_{{ context }}"}

You can use Loki’s command-line interface `logcli` to query logs.

```terminal title="Example Application Log Query"
$ oc extract cm/lokistack-sample-ca-bundle --to=lokistack --confirm
```

```terminal
$ cat lokistack/*.crt >lokistack_ca.crt
```

```terminal
$ logcli -o raw --bearer-token="${bearer_token}" --ca-cert="lokistack_ca.crt" --addr xxxxxx
```

```terminal title="Example Infrastructure Log Query"
$ logcli --bearer-token="$(oc whoami -t)" --addr https://lokistack-dev-openshift-logging.apps.devcluster.openshift.com/api/logs/v1/infrastructure labels
```

```terminal title="Example Audit log Query"
$ logcli --bearer-token="$(oc whoami -t)" --addr https://lokistack-dev-openshift-logging.apps.devcluster.openshift.com/api/logs/v1/audit labels
```

**Additional resources**

*   [LogCLI Documentation](https://grafana.com/docs/loki/latest/tools/logcli/)