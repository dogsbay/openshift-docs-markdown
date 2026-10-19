{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress Controller router timeout variables {id="ingress-controller-router-timeout_{{ context }}"}

Reference the router timeout configurations on the Ingress Controller. These settings control how long the router waits for client, server, and tunnel connections during normal traffic. {._abstract}


:::note

Do not modify environment variables directly on the router deployment. Instead, configure timeouts through the `IngressController` custom resource (CR) or through annotations on individual `Route` resources. The Ingress Operator automatically sets the corresponding environment variables on the Ingress Controller deployment.

:::


A `TimeUnits` value uses a number and a unit: `us` (microseconds), `ms` (milliseconds, default), `s` (seconds), `m` (minutes), `h` (hours), `d` (days).

The regular expression is: [1-9][0-9]*(`us`|`ms`|`s`|`m`|`h`|`d`).

The following table lists `IngressController` CR fields and router environment variables:

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Environment variable</th>
  <th>Default</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>spec.tuningOptions.backendCheckInterval</code></td>
  <td><code>ROUTER_BACKEND_CHECK_INTERVAL</code></td>
  <td><code>5000ms</code></td>
  <td>Length of time from one liveness check to the next on backends. The <code>healthCheckInterval</code> field can override the <code>backendCheckInterval</code> field.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.clientFinTimeout</code></td>
  <td><code>ROUTER_CLIENT_FIN_TIMEOUT</code></td>
  <td><code>1s</code></td>
  <td>Controls the TCP finish (FIN) timeout period for the client connecting to the route. If the FIN sent to close the connection does not answer within the given time, HAProxy closes the connection.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.clientTimeout</code></td>
  <td><code>ROUTER_DEFAULT_CLIENT_TIMEOUT</code></td>
  <td><code>30s</code></td>
  <td>Length of time that a client has to acknowledge or send data.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.connectTimeout</code></td>
  <td><code>ROUTER_DEFAULT_CONNECT_TIMEOUT</code></td>
  <td><code>5s</code></td>
  <td>The maximum connection time allowed to establish a connection to the backend pool.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.serverFinTimeout</code></td>
  <td><code>ROUTER_DEFAULT_SERVER_FIN_TIMEOUT</code></td>
  <td><code>1s</code></td>
  <td>Controls the TCP finish (FIN) timeout from the router to the pod backing the route.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.serverTimeout</code></td>
  <td><code>ROUTER_DEFAULT_SERVER_TIMEOUT</code></td>
  <td><code>30s</code></td>
  <td>Length of time that a server has to acknowledge or send data.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.tunnelTimeout</code></td>
  <td><code>ROUTER_DEFAULT_TUNNEL_TIMEOUT</code></td>
  <td><code>1h</code></td>
  <td>Maximum time that idle TCP or WebSocket tunnel connections can remain open. Router reloads start a new HAProxy process for new connections while the prior process drains existing ones.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.headerBufferMaxRewriteBytes</code></td>
  <td><code>ROUTER_SLOWLORIS_HTTP_KEEPALIVE</code></td>
  <td><code>300s</code></td>
  <td>Sets the maximum time to wait for a new HTTP request on an idle connection. If a timeout occurs, HAProxy closes the connection by sending a TCP finish (FIN) to both the client and server. Standard browsers and applications handle this closure transparently by opening a new connection as needed.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.slowlorisTimeout</code></td>
  <td><code>ROUTER_SLOWLORIS_TIMEOUT</code></td>
  <td><code>10s</code></td>
  <td>Length of time the transmission of an HTTP request can take.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.reloadInterval</code></td>
  <td><code>RELOAD_INTERVAL</code></td>
  <td><code>5s</code></td>
  <td>Minimum frequency for the router to reload and apply configuration changes that require a reload.</td>
</tr>
<tr>
  <td><code>spec.tuningOptions.healthCheckInterval</code></td>
  <td><code>ROUTER_METRICS_HAPROXY_TIMEOUT</code></td>
  <td><code>5s</code></td>
  <td>Timeout for the gathering of HAProxy metrics.</td>
</tr>
</tbody>
</table>


:::note

Different timeout settings govern distinct phases of a connection rather than accumulating together. On SSL passthrough routes, `tcp-request inspect-delay` is the maximum time a new connection has to provide the payload HAProxy requires to select a backend. If a client fails to send this payload within that limit, HAProxy closes the connection immediately. This initial connection limit operates independently from HTTP keep-alive timers controlled by `ROUTER_SLOWLORIS_HTTP_KEEPALIVE` (`timeout http-keep-alive`).

:::


<a name="ingress-controller-router-timeout-example_{{ context }}"></a>
```yaml title="Example of a route setting custom timeout"
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  annotations:
    haproxy.router.openshift.io/timeout: 5500ms
...
```


:::note

Setting a server-side timeout value for passthrough routes too low can cause WebSocket connections to time out often on that route.

:::