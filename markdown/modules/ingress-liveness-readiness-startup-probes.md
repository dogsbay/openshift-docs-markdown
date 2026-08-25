{%- set _mod_docs_content_type = "REFERENCE" %}
# Configuring Ingress Controller liveness, readiness, and startup probes {id="ingress-liveness-readiness-startup-probes_{{ context }}"}

As a cluster administrator, you can configure the timeout values for the kubelet liveness, readiness, and startup probes for router deployments that are managed by the {{ product_title }} Ingress Controller (router). The ability to set larger timeout values can reduce the risk of unnecessary and unwanted restarts. {._abstract}

The liveness and readiness probes of the router use the default timeout value of 1 second, which is too brief when networking or runtime performance is severely degraded. Probe timeouts can cause unwanted router restarts that interrupt application connections.

You can update the `timeoutSeconds` value on the `livenessProbe`, `readinessProbe`, and `startupProbe` parameters of the router container.

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>livenessProbe</code></td>
  <td>The <code>livenessProbe</code> reports to the kubelet whether a pod is dead and needs to be restarted.</td>
</tr>
<tr>
  <td><code>readinessProbe</code></td>
  <td>The <code>readinessProbe</code> reports whether a pod is healthy or unhealthy. When the readiness probe reports an unhealthy pod, then the kubelet marks the pod as not ready to accept traffic. Subsequently, the endpoints for that pod are marked as not ready, and this status propagates to the kube-proxy. On cloud platforms with a configured load balancer, the kube-proxy communicates to the cloud load-balancer not to send traffic to the node with that pod.</td>
</tr>
<tr>
  <td><code>startupProbe</code></td>
  <td>The <code>startupProbe</code> gives the router pod up to 2 minutes to initialize before the kubelet begins sending the router liveness and readiness probes.  This initialization time can prevent routers with many routes or endpoints from prematurely restarting.</td>
</tr>
</tbody>
</table>


:::important

The timeout configuration option is an advanced tuning technique that can be used to work around issues. However, these issues should eventually be diagnosed and possibly a support case or [Jira issue](https://issues.redhat.com/secure/CreateIssueDetails!init.jspa?pid=12332330&summary=Summary&issuetype=1&priority=10200&versions=12385624) opened for any issues that cause probes to time out.

:::


The following example demonstrates how you can directly patch the default router deployment to set a 5-second timeout for the liveness and readiness probes:

```terminal
$ oc -n openshift-ingress patch deploy/router-default --type=strategic --patch='{"spec":{"template":{"spec":{"containers":[{"name":"router","livenessProbe":{"timeoutSeconds":5},"readinessProbe":{"timeoutSeconds":5}}]}}}}'
```

```terminal title="Verification"
$ oc -n openshift-ingress describe deploy/router-default | grep -e Liveness: -e Readiness:
    Liveness:   http-get http://:1936/healthz delay=0s timeout=5s period=10s #success=1 #failure=3
    Readiness:  http-get http://:1936/healthz/ready delay=0s timeout=5s period=10s #success=1 #failure=3
```