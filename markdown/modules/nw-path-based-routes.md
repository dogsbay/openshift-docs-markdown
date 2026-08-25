{%- set _mod_docs_content_type = "CONCEPT" %}
# Path-based routes {id="nw-path-based-routes_{{ context }}"}

To serve multiple applications by using a single hostname, configure path-based routes. This HTTP-based configuration directs traffic to specific services by comparing the URL path component, ensuring requests match the most specific route defined. {._abstract}

The following table shows example routes and their accessibility:

**Route availability**

<table>
<thead>
<tr>
  <th>Route</th>
  <th>When compared to</th>
  <th>Accessible</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="2"><em>www.example.com/test</em></td>
  <td><em>www.example.com/test</em></td>
  <td>Yes</td>
</tr>
<tr>
  <td><em>www.example.com</em></td>
  <td>No</td>
</tr>
<tr>
  <td rowspan="2"><em>www.example.com/test</em> and <em>www.example.com</em></td>
  <td><em>www.example.com/test</em></td>
  <td>Yes</td>
</tr>
<tr>
  <td><em>www.example.com</em></td>
  <td>Yes</td>
</tr>
<tr>
  <td rowspan="2"><em>www.example.com</em></td>
  <td><em>www.example.com/text</em></td>
  <td>Yes (Matched by the host, not the route)</td>
</tr>
<tr>
  <td><em>www.example.com</em></td>
  <td>Yes</td>
</tr>
</tbody>
</table>

```yaml title="Example of an unsecured route with a path"
apiVersion: route.openshift.io/v1
kind: Route
metadata:
  name: route-unsecured
spec:
  host: www.example.com
  path: "/test"
  to:
    kind: Service
    name: service-name
```
*   `spec.host`: Specifies the path attribute for a path-based route.


:::note

Path-based routing is not available when using passthrough TLS, as the router does not terminate TLS in that case and cannot read the contents of the request.

:::