{%- set _mod_docs_content_type = "CONCEPT" %}
# Updating your applications and workloads {id="ossm-upgrading-apps-workloads_{{ context }}"}

To complete the migration, restart all of the application pods in the mesh to upgrade the Envoy sidecar proxies and their configuration.

To perform a rolling update of a deployment use the following command:

```terminal
$ oc rollout restart <deployment>
```

You must perform a rolling update for all applications that make up the mesh.