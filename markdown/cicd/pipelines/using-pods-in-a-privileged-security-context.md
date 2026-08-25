{%- set _mod_docs_content_type = "ASSEMBLY" %}
{% include "./_attributes/common-attributes.md" %}
# Using pods in a privileged security context {id="using-pods-in-a-privileged-security-context"}
{%- set context = "using-pods-in-a-privileged-security-context" %}

The default configuration of {{ pipelines_shortname }} 1.3.x and later versions does not allow you to run pods with privileged security context, if the pods result from pipeline run or task run.
For such pods, the default service account is `pipeline`, and the security context constraint (SCC) associated with the `pipeline` service account is `pipelines-scc`. The `pipelines-scc` SCC is similar to the `anyuid` SCC, but with minor differences as defined in the YAML file for the SCC of pipelines:

```yaml title="Example pipelines-scc.yaml snippet"
apiVersion: security.openshift.io/v1
kind: SecurityContextConstraints
...
allowedCapabilities:
  - SETFCAP
...
fsGroup:
  type: MustRunAs
...
```

In addition, the `Buildah` cluster task, shipped as part of the {{ pipelines_shortname }}, uses `vfs` as the default storage driver.

{% leveloffset +1 %}{% include "./modules/op-running-pipeline-and-task-run-pods-with-privileged-security-context.md" %}{% endleveloffset %}

{% leveloffset +1 %}{% include "./modules/op-running-pipeline-run-and-task-run-with-custom-scc-and-service-account.md" %}{% endleveloffset %}

## Additional resources {id="additional-references_using-pods-in-a-privileged-security-context" ._additional-resources}

*   For information on managing SCCs, refer to [Managing security context constraints](/authentication/managing-security-context-constraints).