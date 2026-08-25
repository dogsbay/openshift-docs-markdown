{%- set _mod_docs_content_type = "CONCEPT" %}
# HTTP header configuration {id="nw-http-header-configuration_{{ context }}"}

{% if not microshift %}
To customize request and response headers for your applications, configure the Ingress Controller or apply specific route annotations. Understanding the interaction between these configuration methods ensures you effectively manage global and route-specific header policies. {._abstract}

You can also set certain headers by using route annotations. The various ways of configuring headers can present challenges when working together.
{% endif %}
{% if microshift %}
To customize request and response headers, modify individual route configurations or apply route annotations. Understanding the interaction between these methods ensures you effectively manage header policies and resolve potential configuration conflicts.

The various ways of configuring headers can present challenges when working together.
{% endif %}

{% if not microshift %}

:::note

You can only set or delete headers within an `IngressController` or `Route` CR, you cannot append them. If an HTTP header is set with a value, that value must be complete and not require appending in the future. In situations where it makes sense to append a header, such as the X-Forwarded-For header, use the `spec.httpHeaders.forwardedHeaderPolicy` field, instead of `spec.httpHeaders.actions`.

:::

{% endif %}

{% if microshift %}

:::note

You can only set or delete headers within a `Route` CR. You cannot append headers. If an HTTP header is set with a value, that value must be complete and not require appending in the future. In situations where it makes sense to append a header, such as the X-Forwarded-For header, use the `spec.httpHeaders.forwardedHeaderPolicy` field, instead of `spec.httpHeaders.actions`.

:::

{% endif %}

{% if not microshift %}

Order of precedence

:   When the same HTTP header is modified both in the Ingress Controller and in a route, HAProxy prioritizes the actions in certain ways depending on whether it is a request or response header.

    *   For HTTP response headers, actions specified in the Ingress Controller are executed after the actions specified in a route. This means that the actions specified in the Ingress Controller take precedence.
    *   For HTTP request headers, actions specified in a route are executed after the actions specified in the Ingress Controller. This means that the actions specified in the route take precedence.

For example, a cluster administrator sets the X-Frame-Options response header with the value `DENY` in the Ingress Controller using the following configuration:

```yaml title="Example IngressController spec"
apiVersion: operator.openshift.io/v1
kind: IngressController
# ...
spec:
  httpHeaders:
    actions:
      response:
      - name: X-Frame-Options
        action:
          type: Set
          set:
            value: DENY
```

A route owner sets the same response header that the cluster administrator set in the Ingress Controller, but with the value `SAMEORIGIN` using the following configuration:
{% endif %}

```yaml title="Example Route spec"
apiVersion: route.openshift.io/v1
kind: Route
# ...
spec:
  httpHeaders:
    actions:
      response:
      - name: X-Frame-Options
        action:
          type: Set
          set:
            value: SAMEORIGIN
```
{% if not microshift %}
When both the `IngressController` spec and `Route` spec are configuring the X-Frame-Options response header, then the value set for this header at the global level in the Ingress Controller takes precedence, even if a specific route allows frames. For a request header, the `Route` spec value overrides the `IngressController` spec value.

This prioritization occurs because the `haproxy.config` file uses the following logic, where the Ingress Controller is considered the front end and individual routes are considered the back end. The header value `DENY` applied to the front end configurations overrides the same header with the value `SAMEORIGIN` that is set in the back end:

```text
frontend public
  http-response set-header X-Frame-Options 'DENY'

frontend fe_sni
  http-response set-header X-Frame-Options 'DENY'

frontend fe_no_sni
  http-response set-header X-Frame-Options 'DENY'

backend be_secure:openshift-monitoring:alertmanager-main
  http-response set-header X-Frame-Options 'SAMEORIGIN'
```

Additionally, any actions defined in either the Ingress Controller or a route override values set using route annotations.
{% endif %}

{% if microshift %}
Any actions defined in a route override values set using route annotations.
{% endif %}


Special case headers

:   The following headers are either prevented entirely from being set or deleted, or allowed under specific circumstances:

{% if not microshift %}
**Special case header configuration options**

<table>
<thead>
<tr>
  <th>Header name</th>
  <th>Configurable using <code>IngressController</code> spec</th>
  <th>Configurable using <code>Route</code> spec</th>
  <th>Reason for disallowment</th>
  <th>Configurable using another method</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>proxy</code></td>
  <td>No</td>
  <td>No</td>
  <td>The <code>proxy</code> HTTP request header can be used to exploit vulnerable CGI applications by injecting the header value into the <code>HTTP_PROXY</code> environment variable. The <code>proxy</code> HTTP request header is also non-standard and prone to error during configuration.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>host</code></td>
  <td>No</td>
  <td>Yes</td>
  <td>When the <code>host</code> HTTP request header is set using the <code>IngressController</code> CR, HAProxy can fail when looking up the correct route.</td>
  <td>No</td>
</tr>
<tr>
  <td><code>strict-transport-security</code></td>
  <td>No</td>
  <td>No</td>
  <td>The <code>strict-transport-security</code> HTTP response header is already handled using route annotations and does not need a separate implementation.</td>
  <td>Yes: the <code>haproxy.router.openshift.io/hsts_header</code> route annotation</td>
</tr>
<tr>
  <td><code>cookie</code> and <code>set-cookie</code></td>
  <td>No</td>
  <td>No</td>
  <td>The cookies that HAProxy sets are used for session tracking to map client connections to particular back-end servers. Allowing these headers to be set could interfere with HAProxy's session affinity and restrict HAProxy's ownership of a cookie.</td>
  <td>Yes:<br><br><ul><li>the <code>haproxy.router.openshift.io/disable_cookie</code> route annotation</li><li>the <code>haproxy.router.openshift.io/cookie_name</code> route annotation</li></ul></td>
</tr>
</tbody>
</table>

{% endif %}

{% if microshift %}
| Header name | Configurable using `Route` spec | Reason for disallowment | Configurable using another method |
| --- | --- | --- | --- |
| `proxy` | No | The `proxy` HTTP request header can be used to exploit vulnerable CGI applications by injecting the header value into the `HTTP_PROXY` environment variable. The `proxy` HTTP request header is also non-standard and prone to error during configuration. | No |
| `host` | Yes | When the `host` HTTP request header is set using the `IngressController` CR, HAProxy can fail when looking up the correct route. | No |
| `strict-transport-security` | No | The `strict-transport-security` HTTP response header is already handled using route annotations and does not need a separate implementation. | Yes: the `haproxy.router.openshift.io/hsts_header` route annotation |
| `cookie` and `set-cookie` | No | The cookies that HAProxy sets are used for session tracking to map client connections to particular back-end servers. Allowing these headers to be set could interfere with HAProxy’s session affinity and restrict HAProxy’s ownership of a cookie. | Yes:<br>* the `haproxy.router.openshift.io/disable_cookie` route annotation * the `haproxy.router.openshift.io/cookie_name` route annotation |

{% endif %}