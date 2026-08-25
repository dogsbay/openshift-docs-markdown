{%- set _mod_docs_content_type = "REFERENCE" %}
# Ingress controller configuration fields in {{ microshift_short }} {id="microshift-ingress-control-config-fields_{{ context }}"}

The following table lists and defines the ingress controller configuration parameters in the {{ microshift_short }} `config.yaml` file. You use these parameters when you configure access logging, TLS, timeouts, route admission, and other ingress options. {._abstract}

**Ingress controller configuration fields definitions table**

<table>
<thead>
<tr>
  <th>Parameter</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>ingress</code></td>
  <td>The <code>ingress</code> section of the {{ microshift_short }} <code>config.yaml</code> file defines the configurable parameters for the implementation of the {{ OCP }} <code>IngressController</code> API. All of the following parameters in this table are subsections in the <code>ingress</code> section of the {{ microshift_short }} <code>config.yaml</code>.</td>
</tr>
<tr>
  <td><code>accessLogging</code></td>
  <td>This <code>ingress</code> subsection describes how client requests are logged. If the <code>status</code> field is empty, access logging is disabled. When the status field is set to <code>Enabled</code>, access requests are logged as configured with the <code>accessLogging</code> parameters and the <code>accessLogging.destination.type</code> is automatically set to <code>Container</code>.<br><br><ul><li>When enabled, access logging is part of the <code>openshift-router</code> logs. The sos report procedure for {{ microshift_short }} captures logs from this pod.</li></ul></td>
</tr>
<tr>
  <td><code>accessLogging.destination</code></td>
  <td>A destination for logs. The destination for logs can be a local sidecar container or remote. Default value is null.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.type</code></td>
  <td>The type of destination for logs. Valid values are <code>Container</code> or <code>Syslog</code>.<br><br><ul><li>Setting this value to <code>Container</code> specifies that logs should go to a sidecar container. When the destination type is set to <code>Container</code>, a container called <code>logs</code> is automatically created. Using container logs means that logs might be dropped if the rate of logs exceeds the container runtime capacity or the custom logging solution capacity. You must have a custom logging solution that reads logs from this sidecar.</li><li>Setting this value to <code>Syslog</code> specifies that logs are sent to a Syslog endpoint. You must configure a custom Syslog instance and specify an endpoint that can receive Syslog messages. You must have a custom Syslog instance. For example, <a href="https://docs.redhat.com/en/documentation/red_hat_enterprise_linux/9/html/managing_monitoring_and_updating_the_kernel/getting-started-with-kernel-logging_managing-monitoring-and-updating-the-kernel">Getting started with kernel logging</a>.</li></ul></td>
</tr>
<tr>
  <td><code>accessLogging.destination.container</code></td>
  <td>Describes parameters for the <code>Container</code> logging destination type. You must configure a custom logging solution that reads logs from this sidecar.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.container.maxLength</code></td>
  <td>Optional configuration. The default value is <code>1024</code> bytes. Message length must be at least <code>480</code> and not greater than <code>8192</code> bytes.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.syslog</code></td>
  <td>Describes parameters for the <code>Syslog</code> logging destination type. You must configure a custom Syslog instance with an endpoint that can receive Syslog messages.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.syslog.address</code></td>
  <td>Required configuration when the <code>Syslog</code> destination type is set. Valid value is the IP address of the syslog endpoint that receives log messages.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.syslog.facility</code></td>
  <td>Optional configuration when the <code>Syslog</code> destination type is set. Specifies the syslog facility of log messages. If this field is empty, the facility is <code>local1</code>. Otherwise, the field must specify one of the following valid syslog facilities: <code>kern</code>, <code>user</code>, <code>mail</code>, <code>daemon</code>, <code>auth</code>, <code>syslog</code>, <code>lpr</code>, <code>news</code>, <code>uucp</code>, <code>cron</code>, auth2<code>, </code>ftp<code>, </code>ntp<code>, </code>audit<code>, </code>alert<code>, </code>cron2<code>, </code>local0<code>, </code>local1<code>, </code>local2<code>, </code>local3<code>, </code>local4<code>, </code>local5<code>, </code>local6<code>, or </code>local7`.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.syslog.maxLength</code></td>
  <td>Optional configuration when the <code>Syslog</code> destination type is set. The maximum length of the <code>Syslog</code> message. Message length must be at least <code>480</code> and not greater than <code>4096</code> bytes. If this field is empty, the maximum length is set to the default value of <code>1024</code> bytes.</td>
</tr>
<tr>
  <td><code>accessLogging.destination.syslog.port</code></td>
  <td>Required configuration when the <code>Syslog</code> destination type is set. The UDP port number of the syslog endpoint that receives log messages. The default value is <code>0</code>.</td>
</tr>
<tr>
  <td><code>httpCaptureCookies</code></td>
  <td>Specifies HTTP cookies that you want to capture in access logs. If the <code>httpCaptureCookies</code> field is empty, access logs do not capture the cookies. Default value is empty. Configuring <code>ingress.accessLogging.httpCaptureCookies</code> automatically enables ingress access logging. For any cookie that you want to capture, you must also set the <code>matchType</code> and <code>maxLength</code> parameters.<br><br><ul><li>For example:</li></ul><pre>  httpCaptureCookies:&#10;  - matchType: Exact&#10;    maxLength: 128&#10;    name: MYCOOKIE</pre></td>
</tr>
<tr>
  <td><code>httpCaptureCookies.matchType</code></td>
  <td>Specifies whether the field name of the cookie exactly matches the capture cookie setting or is a prefix of the capture cookie setting. Valid values are <code>Exact</code> for an exact string match and <code>Prefix</code> for a string prefix match.<br><br><ul><li>If you use the <code>Exact</code> setting, you must also specify a name in the <code>httpCaptureCookies.name</code> field.</li><li>If you use the <code>Prefix</code> setting, you must also specify a prefix in the <code>httpCaptureCookies.namePrefix</code> field. For example, the settings of <code>matchType: Prefix</code> when the <code>namePrefix</code> is "mush" captures a cookie named "mush" or "mushroom" but not one named "room". The first matching cookie is captured.</li></ul></td>
</tr>
<tr>
  <td><code>httpCaptureCookies.maxLength</code></td>
  <td>Specifies the maximum length of the cookie that is logged, which includes the cookie name, cookie value, and one-character delimiter. If the log entry exceeds this length, the value is truncated in the log message. The ingress controller might impose a separate bound on the total length of HTTP headers in a request. The minimum value is <code>1</code> byte, maximum value is <code>1024</code> bytes. The default value is <code>0</code>.</td>
</tr>
<tr>
  <td><code>httpCaptureCookies.name</code></td>
  <td>Specifies the exact name used for a cookie name match as set in the <code>httpCaptureCookies.matchType</code> parameter. The value must be a valid HTTP cookie name as defined in <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-4.1">RFC 6265 section 4.1</a>. The minimum length is <code>1</code> byte and the maximum length is <code>1024</code> bytes.</td>
</tr>
<tr>
  <td><code>httpCaptureCookies.namePrefix</code></td>
  <td>Specifies the prefix for a cookie name match as set in the <code>httpCaptureCookies.matchType</code> parameter. The value must be a valid HTTP cookie name as defined in <a href="https://datatracker.ietf.org/doc/html/rfc6265#section-4.1">RFC 6265 section 4.1</a>. The minimum length is <code>1</code> byte and the maximum length is <code>1024</code> bytes.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders</code></td>
  <td>Defines the HTTP headers that should be captured in the access logs. This field is a list and allows capturing request and response headers independently. When this field is empty, headers are not captured. This option only applies to plain text HTTP connections and to secure HTTP connections for which the ingress controller terminates encryption: for example, edge-terminated or reencrypt connections. Headers cannot be captured for TLS <code>passthrough</code> connections. Configuring the <code>ingress.accessLogging.httpCaptureHeaders</code> parameter automatically enables ingress access logging.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders.request</code></td>
  <td>Specifies which HTTP request headers to capture. When this field is empty, no request headers are captured.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders.request.maxLength</code></td>
  <td>Specifies a maximum length for the header value. When a header value exceeds this length, the value is truncated in the log message. The minimum required value is <code>1</code> byte. The ingress controller might impose a separate bound on the total length of HTTP headers in a request.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders.request.name</code></td>
  <td>Specifies a header name. The value must be a valid HTTP header name as defined in <a href="https://datatracker.ietf.org/doc/html/rfc2616#section-4.2">RFC 2616 section 4.2</a>. If you configure this value, you must specify <code>maxLength</code> and <code>name</code> values.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders.response</code></td>
  <td>Specifies which HTTP response headers to capture. If this field is empty, no response headers are captured.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders.response.maxLength</code></td>
  <td>Specifies a maximum length for the header value. If a header value exceeds this length, the value is truncated in the log message. The ingress controller might impose a separate bound on the total length of HTTP headers in a request.</td>
</tr>
<tr>
  <td><code>httpCaptureHeaders.response.name</code></td>
  <td>Specifies a header name. The value must be a valid HTTP header name as defined in <a href="https://datatracker.ietf.org/doc/html/rfc2616#section-4.2">RFC 2616 section 4.2</a>.</td>
</tr>
<tr>
  <td><code>httpLogFormat</code></td>
  <td>Specifies the format of the log message for an HTTP request. If this field is empty, log messages use the default HTTP log format. For HAProxy default HTTP log format, see the <a href="https://cbonte.github.io/haproxy-dconv/2.0/configuration.html#8.2.3">HAProxy documentation</a>.</td>
</tr>
<tr>
  <td><code>status</code></td>
  <td>Specifies whether access is logged or not. Valid values are <code>Enabled</code> and <code>Disabled</code>. Default value is <code>Disabled</code>.<br><br><ul><li>When you configure either <code>ingress.accessLogging.httpCaptureHeaders</code> or</li></ul><code>ingress.accessLogging.httpCaptureCookies</code>, you must set <code>ingress.accessLogging.status</code> to <code>Enabled</code>.<ul><li>When you set the <code>ingress.status</code> field to <code>Enabled</code>, the <code>accessLogging.destination.type</code> is automatically set to <code>Container</code> and the router logs all requests in the <code>logs</code> container.</li><li>If you set this value to <code>Disabled</code>, the router does not log any requests in the access log.</li></ul></td>
</tr>
<tr>
  <td><code>certificateSecret</code></td>
  <td>A reference to a <code>kubernetes.io/tls</code> type of secret that contains the default certificate that the {{ microshift_short }} ingress controller serves. When routes do not specify their own certificate, the <code>certificateSecret</code> parameter is used. All secrets used must contain <code>tls.key</code> key file contents and <code>tls.crt</code> certificate file contents.<br><br><ul><li>When the <code>certificateSecret</code> parameter is not set, a wildcard certificate is automatically generated and used. The wildcard certificate is valid for the ingress controller default <code>domain</code> and its <code>subdomains</code>. The generated certificate authority (CA) is automatically integrated with the truststore of the node.</li><li>In-use generated and user-specified certificates are automatically integrated with the {{ microshift_short }} built-in OAuth server.</li></ul></td>
</tr>
<tr>
  <td><code>clientTLS</code></td>
  <td>Authenticates client access to the node and services. As a result, mutual TLS authentication is enabled. If this parameter is not set, then client TLS is not enabled. You must set the <code>spec.clientTLS.clientCertificatePolicy</code> and <code>spec.clientTLS.clientCA</code> parameters to use client TLS.</td>
</tr>
<tr>
  <td><code>clientTLS.AllowedSubjectPatterns</code></td>
  <td>Optional subfield that specifies a list of regular expressions that are matched against the distinguished name on a valid client certificate to filter requests. This parameter is useful when you have client authentication. Use this parameter to cause the ingress controller to reject certificates based on the distinguished name. The Perl Compatible Regular Expressions (PCRE) syntax is required. You must set the <code>spec.clientTLS.clientCertificatePolicy</code> and <code>spec.clientTLS.clientCA</code> parameters to use <code>clientTLS.AllowedSubjectPatterns</code>.<br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>When configured, this field must contain a valid expression or the {{ microshift_short }} service fails. At least one pattern must match a client certificate's distinguished name; otherwise, the ingress controller rejects the certificate and denies the connection.</dd></dl></td>
</tr>
<tr>
  <td><code>clientTLS.clientCA</code></td>
  <td>Specifies a required config map that is in the <code>openshift-ingress</code> namespace. Required to enable client TLS. The config map must contain a certificate authority (CA) bundle named <code>ca-bundle.pem</code> or the deployment of the default router fails.</td>
</tr>
<tr>
  <td><code>clientTLS.clientCA.name</code></td>
  <td>The <code>metadata.name</code> of the config map referenced in the <code>clientTLS.clientCA</code> value.</td>
</tr>
<tr>
  <td><code>clientTLS.ClientCertificatePolicy</code></td>
  <td><code>Required</code> or <code>Optional</code> are valid values. Set to <code>Required</code> to enable client TLS. The ingress controller only checks client certificates for edge-terminated and re-encrypted TLS routes. The ingress controller cannot check certificates for plain text HTTP or passthrough TLS routes.</td>
</tr>
<tr>
  <td><code>defaultHTTPVersion</code></td>
  <td>Sets the HTTP version for the ingress controller. The default value is <code>1</code> for HTTP 1.1. Setting up a load balancer for HTTP 2 and 3 is recommended.</td>
</tr>
<tr>
  <td><code>forwardedHeaderPolicy</code></td>
  <td>Specifies when and how the ingress controller sets the <code>Forwarded</code>, <code>X-Forwarded-For</code>, <code>X-Forwarded-Host</code>, <code>X-Forwarded-Port</code>, <code>X-Forwarded-Proto</code>, and <code>X-Forwarded-Proto-Version</code> HTTP headers. The following values are valid:<br><br><ul><li><code>Append</code> preserves any existing headers by specifying that the ingress controller appends them. 'Append` is the default value.</li><li><code>Replace</code> removes any existing headers by specifying that the ingress controller sets the headers.</li><li><code>IfNone</code> sets the headers set by specifying that the ingress controller sets the headers if they are not already set.</li><li><code>Never</code> preserves any existing headers by specifying that the ingress controller never sets the headers.</li></ul></td>
</tr>
<tr>
  <td><code>httpCompression</code></td>
  <td>Defines the policy for HTTP traffic compression.</td>
</tr>
<tr>
  <td><code>httpCompression.mimeTypes</code></td>
  <td>Defines a list of MIME types to which compression should be applied.<br><br><ul><li>For example, <code>text/css; charset=utf-8</code>, <code>text/html</code>, <code>text/*</code>, <code>image/svg+xml</code>, <code>application/octet-stream</code>, <code>X-custom/customsub</code>, in the, <code>type/subtype; [;attribute=value]</code> format.</li><li>Valid <code>types</code> are: application, image, message, multipart, text, video, or a custom type prefaced by <code>X-</code>. To see the full notation for MIME types and subtypes, see <a href="https://datatracker.ietf.org/doc/html/rfc1341#page-7">RFC1341</a> (IETF Datatracker documentation).</li></ul></td>
</tr>
<tr>
  <td><code>httpEmptyRequestsPolicy</code></td>
  <td>Describes how HTTP connections are handled if the connection times out before a request is received. Allowed values for this field are <code>Respond</code> and <code>Ignore</code>. The default value is <code>Respond</code>. Empty requests typically come from load-balancer health probes or preconnects and can often be safely ignored. However, network errors and port scans can also cause these requests. Therefore, setting this field to <code>Ignore</code> can impede detection or diagnosis of network problems and detecting intrusion attempts.<br><br><ul><li>When the policy is set to <code>Respond</code>, the ingress controller sends an HTTP <code>400</code> or <code>408</code> response, logs the connection if access logging is enabled, and counts the connection in the appropriate metrics.</li><li>When the policy is set to <code>Ignore</code>, the <code>http-ignore-probes</code> parameter is added to the <code>HAproxy</code> process configuration. After this parameter is added, the ingress controller closes the connection without sending a response, then either logs the connection or incrementing metrics.</li></ul></td>
</tr>
<tr>
  <td><code>logEmptyRequests</code></td>
  <td>Specifies connections for which no request is received and logged. <code>Log</code> and <code>Ignore</code> are valid values. Empty requests typically come from load-balancer health probes or preconnects and can often be safely ignored. However, network errors and port scans can also cause these requests. Therefore, setting this field to <code>Ignore</code> can impede detection or diagnosis of network problems and detecting intrusion attempts. The default value is <code>Log</code>.<br><br><ul><li>Setting this value to <code>Log</code> indicates that an event should be logged.</li><li>Setting this value to <code>Ignore</code> sets the <code>dontlognull</code> option in the <code>HAproxy</code> configuration.</li></ul></td>
</tr>
<tr>
  <td><code>httpErrorCodePages</code></td>
  <td>Describes custom error code pages. To use this setting, you must configure the <code>httpErrorCodePages.name</code> parameter.</td>
</tr>
<tr>
  <td><code>httpErrorCodePages.name</code></td>
  <td>Specifies custom error code pages. You can only customize errors for <code>503</code> and <code>404</code> page codes. To customize error code pages, specify a <code>ConfigMap</code> name. The <code>ConfigMap</code> object must be in the <code>openshift-ingress</code> namespace and contain keys in the <code>error-page-&lt;error code&gt;.http</code> format where <code>&lt;error code&gt;</code> is an HTTP status code. Each value in the <code>ConfigMap</code> must be the full response, including HTTP headers. The default value of this parameter is null.</td>
</tr>
<tr>
  <td><code>ports</code></td>
  <td>Defines default router ports.</td>
</tr>
<tr>
  <td><code>ports.http</code></td>
  <td>Default router http port. Must be in range 1-65535. Default value is <code>80</code>.</td>
</tr>
<tr>
  <td><code>ports.https</code></td>
  <td>Default router https port. Must be in range 1-65535. Default value is <code>443</code>.</td>
</tr>
<tr>
  <td><code>routeAdmission</code></td>
  <td>Defines a policy for handling new route claims, such as allowing or denying claims across namespaces.</td>
</tr>
<tr>
  <td><code>routeAdmission.namespaceOwnership</code></td>
  <td>Describes how hostname claims across namespaces are handled. The default is <code>InterNamespaceAllowed</code>. The following are valid values:<br><br><ul><li><code>Strict</code> does not allow routes to claim the same hostname across namespaces.</li><li><code>InterNamespaceAllowed</code> allows routes to claim different paths of the same hostname across namespaces.</li></ul></td>
</tr>
<tr>
  <td><code>routeAdmission.wildcardPolicy</code></td>
  <td>Controls how the ingress controller handles routes with configured wildcard policies. <code>WildcardsAllowed</code> and <code>WildcardsDisallowed</code> are valid values. Default value is <code>WildcardsDisallowed</code>.<br><br><ul><li><code>WildcardPolicyAllowed</code> means that the ingress controller admits routes with any wildcard policy.</li><li><code>WildcardPolicyDisallowed</code> means that the ingress controller admits only routes with a wildcard policy of <code>None</code>.</li></ul><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>Changing the wildcard policy from <code>WildcardsAllowed</code> to <code>WildcardsDisallowed</code> causes admitted routes with a wildcard policy of <code>subdomain</code> to stop working. The ingress controller only readmits these routes after they are recreated with a wildcard policy of <code>None</code>.</dd></dl></td>
</tr>
<tr>
  <td><code>status</code></td>
  <td>Default router status. <code>Managed</code> or <code>Removed</code> are valid values.</td>
</tr>
<tr>
  <td><code>tlsSecurityProfile</code></td>
  <td><code>tlsSecurityProfile</code> specifies settings for TLS connections for ingress controllers. If not set, the default value is based on the <code>apiservers.config.openshift.io/cluster</code> resource. The TLS <code>1.0</code> version of an <code>Old</code> or <code>Custom</code> profile is automatically converted to <code>1.1</code> by the ingress controller. <code>Intermediate</code> is the default setting.<br><br><ul><li>The minimum TLS version for ingress controllers is <code>1.1</code>. The maximum TLS version is <code>1.3</code>.</li></ul><dl class="db-admonition db-admonition-note"><dt>Note</dt><dd>The <code>TLSProfile</code> status shows the ciphers and the minimum TLS version of the configured security profile. Profiles are intent-based and change over time when new ciphers are developed and existing ciphers are found to be insecure. The usable list can be reduced depending on which ciphers are available to a specific process.</dd></dl></td>
</tr>
<tr>
  <td><code>tlsSecurityProfile.custom</code></td>
  <td>User-defined TLS security profile. If you configure this parameter and related parameters, use extreme caution.</td>
</tr>
<tr>
  <td><code>tlsSecurityProfile.custom.ciphers</code></td>
  <td>Specifies the cipher algorithms that are negotiated during the TLS handshake. Operators might remove entries their operands do not support.</td>
</tr>
<tr>
  <td><code>tlsSecurityProfile.custom.minTLSVersion</code></td>
  <td>Specifies the minimal version of the TLS protocol that is negotiated during the TLS handshake. For example, to use TLS versions 1.1, 1.2 and 1.3, set the value to <code>VersionTLS11</code>. The highest valid value for <code>minTLSVersion</code> is <code>VersionTLS12</code>.</td>
</tr>
<tr>
  <td><code>tlsSecurityProfile.intermediate</code></td>
  <td>You can use this TLS profile for a majority of services. <a href="https://wiki.mozilla.org/Security/Server_Side_TLS#Intermediate_compatibility_.28recommended.29">Intermediate compatibility (recommended)</a>.</td>
</tr>
<tr>
  <td><code>tlsSecurityProfile.old</code></td>
  <td>Used for backward compatibility. <a href="https://wiki.mozilla.org/Security/Server_Side_TLS#Old_backward_compatibility">Old backward compatibility</a>.</td>
</tr>
<tr>
  <td><code>tlsSecurityProfile.type</code></td>
  <td>Valid values are <code>Intermediate</code>, <code>Old</code>, or <code>Custom</code>. The <code>Modern</code> value is not supported.</td>
</tr>
<tr>
  <td><code>tuningOptions</code></td>
  <td>Specifies options for tuning the performance of ingress controller pods.</td>
</tr>
<tr>
  <td><code>tuningOptions.clientFinTimeout</code></td>
  <td>Specifies how long the ingress controller holds a connection open while waiting for a client response before the server closes the connection. The default timeout is <code>1s</code>.</td>
</tr>
<tr>
  <td><code>tuningOptions.clientTimeout</code></td>
  <td>Specifies how long the ingress controller holds a connection open while waiting for a client response. The default timeout is <code>30s</code>.</td>
</tr>
<tr>
  <td><code>tuningOptions.headerBufferBytes</code></td>
  <td>Specifies how much memory is reserved, in bytes, for ingress controller connection sessions. This value must be at least <code>16384</code> if HTTP/2 is enabled for the ingress controller. If not set, the default value is <code>32768</code> bytes.<br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>Setting this field not recommended because <code>headerBufferMaxRewriteBytes</code> parameter values that are too small can break the ingress controller. Conversely, values for <code>headerBufferMaxRewriteBytes</code> that are too large could cause the ingress controller to use significantly more memory than necessary.</dd></dl></td>
</tr>
<tr>
  <td><code>tuningOptions.headerBufferMaxRewriteBytes</code></td>
  <td>Specifies how much memory should be reserved, in bytes, from <code>headerBufferBytes</code> for HTTP header rewriting and appending for ingress controller connection sessions. The minimum value for <code>headerBufferMaxRewriteBytes</code> is <code>4096</code>. <code>headerBufferBytes</code> must be greater than the <code>headerBufferMaxRewriteBytes</code> value for incoming HTTP requests. If not set, the default value is <code>8192</code> bytes.<br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>Setting this field is not recommended because <code>headerBufferMaxRewriteBytes</code> values that are too small can break the ingress controller and <code>headerBufferMaxRewriteBytes</code> that are too large could cause the ingress controller to use significantly more memory than necessary.</dd></dl></td>
</tr>
<tr>
  <td><code>tuningOptions.healthCheckInterval</code></td>
  <td>Specifies how long the router waits between health checks, set in seconds. The default is <code>5s</code>.</td>
</tr>
<tr>
  <td><code>tuningOptions.maxConnections</code></td>
  <td>Specifies the maximum number of simultaneous connections that can be established for each <code>HAProxy</code> process. Increasing this value allows each ingress controller pod to handle more connections at the cost of additional system resources. Permitted values are <code>0</code>, <code>-1</code>, any value within the range <code>2000</code> and <code>2000000</code>, or the field can be left empty.<br><br><ul><li>If this field is empty or has the value <code>0</code>, the ingress controller uses the default value of <code>50000</code>.</li><li>If the field has the value of <code>-1</code>, then the <code>HAProxy</code> process dynamically computes a maximum value based on the available <code>ulimits</code> in the running container. This process results in a large computed value that incurs significant memory usage compared to the current default value of <code>50000</code>.</li><li>If the field has a value that is greater than the current operating system limit, the <code>HAProxy</code> processes do not start.</li><li>If you choose a discrete value and the router pod is migrated to a new node, it is possible that the new node does not have an identical <code>ulimit</code> configured. In such cases, the pod fails to start.</li><li>You can monitor memory usage for router containers with the <code>container_memory_working_set_bytes{container="router",namespace="openshift-ingress"}</code> metric.</li><li>You can monitor memory usage of individual <code>HAProxy</code> processes in router containers with the <code>container_memory_working_set_bytes{container="router",namespace="openshift-ingress"}/container_processes{container="router",namespace="openshift-ingress"}</code> metric.</li></ul></td>
</tr>
<tr>
  <td><code>tuningOptions.serverFinTimeout</code></td>
  <td>Specifies how long a connection is held open while waiting for the server response to the client that is closing the connection. The default timeout is <code>1s</code>.</td>
</tr>
<tr>
  <td><code>tuningOptions.serverTimeout</code></td>
  <td>Specifies how long a connection is held open while waiting for a server response. The default timeout is <code>30s</code>.</td>
</tr>
<tr>
  <td><code>tuningOptions.threadCount</code></td>
  <td>Specifies the number of threads to create per HAProxy process. Creating more threads allows each ingress controller pod to handle more connections, at the cost of using more system resources. The HAProxy load balancer supports up to <code>64</code> threads. If this field is empty, the ingress controller uses the default value of <code>4</code> threads.<br><br><dl class="db-admonition db-admonition-important"><dt>Important</dt><dd>Setting this field is not recommended because increasing the number of <code>HAProxy</code> threads allows ingress controller pods to use more CPU time under load, and prevent other pods from receiving the CPU resources they need to perform. Reducing the number of threads can cause the ingress controller to perform poorly.</dd></dl></td>
</tr>
<tr>
  <td><code>tuningOptions.tlsInspectDelay</code></td>
  <td>Specifies how long the router can hold data to find a matching route. Setting this value too low can cause the router to fall back to the default certificate for edge-terminated, re-encrypted, or passthrough routes, even when using a better-matched certificate. The default inspect delay is <code>5s</code>.</td>
</tr>
<tr>
  <td><code>tuningOptions.tunnelTimeout</code></td>
  <td>Specifies how long a tunnel connection, including websockets, remains open while the tunnel is idle. The default timeout is <code>1h</code>.</td>
</tr>
</tbody>
</table>