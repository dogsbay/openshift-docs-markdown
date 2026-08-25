{%- set _mod_docs_content_type = "REFERENCE" %}
# Parameters and values for the {{ microshift_short }} config.yaml file {id="microshift-config-parameters-table_{{ context }}"}

The following table explains {{ microshift_short }} configuration YAML parameters and valid values for each: {._abstract}

**{{ microshift_short }} `config.yaml` parameters**

<table>
<thead>
<tr>
  <th>Field</th>
  <th>Type</th>
  <th>Description</th>
</tr>
</thead>
<tbody>
<tr>
  <td><code>advertiseAddress</code></td>
  <td><code>string</code></td>
  <td>A string that specifies the IP address from which the API server is advertised to members of the node. The default value is calculated based on the address of the service network.</td>
</tr>
<tr>
  <td><code>auditLog.maxFileAge</code></td>
  <td><code>number</code></td>
  <td>How long log files are stored before automatic deletion. The default value of <code>0</code> in the <code>maxFileAge</code> parameter means a log file is never deleted based on age. You can configure this value.</td>
</tr>
<tr>
  <td><code>auditLog.maxFileSize</code></td>
  <td><code>number</code></td>
  <td>By default, when the <code>audit.log</code> file reaches the <code>maxFileSize</code> limit, the <code>audit.log</code> file is rotated and {{ microshift_short }} begins writing to a new <code>audit.log</code> file. You can configure this value.</td>
</tr>
<tr>
  <td><code>auditLog.maxFiles</code></td>
  <td><code>number</code></td>
  <td>The total number of log files kept. By default, {{ microshift_short }} retains 10 log files. The oldest is deleted when an excess file is created. You can configure this value.</td>
</tr>
<tr>
  <td><code>auditLog.profile</code></td>
  <td><code>Default</code>, <code>WriteRequestBodies</code>, <code>AllRequestBodies</code>, or <code>None</code></td>
  <td>Logs only metadata for read and write requests; does not log request bodies except for OAuth access token requests. If you do not specify this field, the <code>Default</code> profile is used.</td>
</tr>
<tr>
  <td><code>namedCertificates</code></td>
  <td><code>list</code></td>
  <td>Defines externally generated certificates and domain names by using custom certificate authorities.</td>
</tr>
<tr>
  <td><code>namedCertificates.certPath</code></td>
  <td><code>path</code></td>
  <td>The full path to the certificate.</td>
</tr>
<tr>
  <td><code>namedCertificates.keyPath</code></td>
  <td><code>path</code></td>
  <td>The full path to the certificate key.</td>
</tr>
<tr>
  <td><code>namedCertificates.names</code></td>
  <td><code>list</code></td>
  <td>Optional. Add a list of explicit DNS names. Leading wildcards are allowed. If you do not list names, the implicit names are extracted from the certificates.</td>
</tr>
<tr>
  <td><code>subjectAltNames</code></td>
  <td>Fully qualified domain names (FQDNs), wildcards such as <code>*.domain.com</code>, or IP addresses.</td>
  <td>Subject Alternative Names for API server certificates. SANs indicate all of the domain names and IP addresses that are secured by a certificate.</td>
</tr>
<tr>
  <td><code>tls</code></td>
  <td><code>list</code></td>
  <td>Defines the transport later protocol (TLS) used and the cipher suites allowed. Provides security for the exposed {{ microshift_short }} API server and internal control plane endpoints.</td>
</tr>
<tr>
  <td><code>tls.cipherSuites</code></td>
  <td><code>string</code></td>
  <td>Lists the allowed cipher suites that the API server accepts and serves. Defaults to the cipher suites allowed with the TLS specification set in the <code>tls.minVersion</code> parameter.</td>
</tr>
<tr>
  <td><code>tls.minVersion</code></td>
  <td><code>VersionTLS12</code> or <code>VersionTLS13</code></td>
  <td>Specifies the minimum version of TLS to serve from the API server. The default value is <code>VersionTLS12</code>.</td>
</tr>
<tr>
  <td><code>debugging.logLevel</code></td>
  <td><code>Normal</code>, <code>Debug</code>, <code>Trace</code>, or <code>TraceAll</code></td>
  <td>Log verbosity. The default value is <code>Normal</code>.</td>
</tr>
<tr>
  <td><code>dns.baseDomain</code></td>
  <td><code>valid domain</code></td>
  <td>Base domain of the node. All managed DNS records are subdomains of this base.</td>
</tr>
<tr>
  <td><code>dns.hosts.status</code></td>
  <td><code>Enabled</code>, <code>Disabled</code></td>
  <td>Default set to <code>Disabled</code> when not configured.</td>
</tr>
<tr>
  <td><code>dns.hosts.file</code></td>
  <td><code>String</code></td>
  <td>Filepath by default set to <code>/etc/hosts</code>.</td>
</tr>
<tr>
  <td><code>etcd.memoryLimitMB</code></td>
  <td><code>number</code></td>
  <td>By default, <code>etcd</code> uses as much memory as needed to handle the load on the system. However, in memory constrained systems, it might be preferred or necessary to limit the amount of memory <code>etcd</code> can to use at a given time.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices</code></td>
  <td><code>groups</code></td>
  <td>Lists the device definitions to be exposed by the plugin. Each Device entry contains a 'name' and a list of groups.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups</code></td>
  <td><code>count</code>, <code>paths</code>, 'usbs'</td>
  <td>Lists device groups. Devices within a group comprise a pool of devices under a common name. When you request a device from that pool, you can receive a device from different defined paths.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.count</code></td>
  <td><code>number</code></td>
  <td>Specifies how many times this group of devices can be mounted concurrently. If unspecified, Count defaults to 1. Setting a high count, for example, <code>1000</code> for <code>/dev/fuse</code>, is possible because there are no inherent limits, but performance might be affected depending on the host capabilities and the nature of the device.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths</code></td>
  <td><code>string</code></td>
  <td>Lists the host device file paths. Paths can be glob patterns. For example, <code>/dev/ttyUSB</code>, in which case each matched device is schedulable Count times. This field is exclusive with usbs. You cannot define both parameters in the same device group.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths.limit</code></td>
  <td><code>number</code></td>
  <td>Specifies up to how many times this device can be used in the group concurrently when other devices in the group yield more matches. For example, if one path in the group matches 5 devices and another matches 1 device, but has a limit of 10, then the group provides 5 pairs of devices. When unspecified, the limit defaults to <code>1</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths.mountPath</code></td>
  <td><code>string</code></td>
  <td>The file path at which the host device should be mounted within the container. When unspecified, mountPath defaults to <code>path</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths.path</code></td>
  <td><code>string</code></td>
  <td>The file path of a device on the host. For example, <code>/dev/video0</code>, <code>/dev/ttyUSB*</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths.permissions</code></td>
  <td><code>r</code>, <code>w</code>, <code>m</code></td>
  <td>The file-system permissions given to the mounted device. Applies only to mounts of type <code>Device</code>. Can be one or more of:<br><br><ul><li><code>r</code> allows the container to read from the specified device.</li><li><code>w</code> allows the container to write to the specified device.</li><li><code>m</code> allows the container to create device files that do not yet exist.</li></ul>When unspecified, the value defaults to <code>mrw</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths.readOnly</code></td>
  <td><code>true</code>, <code>false</code></td>
  <td>Specifies whether the path should be mounted read-only. Applies only to mounts of type <code>Mount</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.paths.type</code></td>
  <td><code>Device</code>, <code>Mount</code></td>
  <td>Describes what type of file-system node this <code>path</code> represents and thus how it should be mounted. When unspecified, <code>type</code> defaults to <code>Device</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.usbs</code></td>
  <td><code>string</code></td>
  <td>Lists the USB specifications that this device group consists of. The vendor and product IDs must always match. The serial ID must match if provided, or skipped if the ID is empty. The <code>usbs</code> field is exclusive with <code>paths</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.usbs.product</code></td>
  <td><code>string</code></td>
  <td>The USB Product ID of the device to match on. For example, <code>0x7523</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.usbs.serial</code></td>
  <td><code>string</code></td>
  <td>The serial number of the device to match on. A USB device must match exactly on all the given attributes to pass.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.groups.usbs.vendor</code></td>
  <td><code>string</code></td>
  <td>The USB Vendor ID of the device to match on. For example, <code>0x1a86</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.devices.name</code></td>
  <td><code>string</code></td>
  <td>A unique string representing the kind of device this specification describes. For example, <code>serial</code>, <code>video</code>, or <code>fuse</code>. This name is used in pod resource requests. For example, <code>device.microshift.io/serial</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.domain</code></td>
  <td><code>string</code></td>
  <td>Specifies the domain prefix with which devices are advertised and present in the node. For example, <code>device.microshift.io/serial</code>. The default value is <code>device.microshift.io</code>.</td>
</tr>
<tr>
  <td><code>generic.Device.Plugin.status</code></td>
  <td><code>Enabled</code>, <code>Disabled</code></td>
  <td>Specifies the default GDP status.</td>
</tr>
<tr>
  <td><code>ingress.certificateSecret</code></td>
  <td><code>string</code></td>
  <td>A reference to a secret that contains the default certificate that is served by the ingress controller. When routes do not specify their own certificate, <code>certificateSecret</code> is used.<br><br>The secret must contain the following keys and data:<br><br><ul><li><code>tls.crt</code>: certificate file contents</li><li><code>tls.key</code>: key file contents</li></ul>If you do not set one of these values, a wildcard certificate is automatically generated and used. The certificate is valid for the ingress controller <code>domain</code> and <code>subdomains</code> fields, and the generated CA for the certificate is automatically integrated with the truststore for the node.<br><br>Any certificate in use is automatically integrated in the {{ microshift_short }} OAuth server.</td>
</tr>
<tr>
  <td><code>ingress.clientTLS</code></td>
  <td><code>AllowedSubjectPatterns</code>, <code>spec.clientTLS.ClientCA</code>, <code>spec.clientTLS.clientCertificatePolicy</code></td>
  <td>Authenticates client access to the node and services. Mutual TLS authentication is enabled when using these settings. If you do not set values for the <code>spec.clientTLS.clientCertificatePolicy</code> and <code>spec.clientTLS.ClientCA</code> required subfields, client TLS is not enabled.</td>
</tr>
<tr>
  <td><code>ingress.clientTLS.AllowedSubjectPatterns</code></td>
  <td><code>list in PCRE syntax</code></td>
  <td>Optional subfield which specifies a list of regular expressions that are matched against the distinguished name on a valid client certificate to filter requests. Use this parameter to cause the ingress controller to reject certificates based on the distinguished name. The Perl Compatible Regular Expressions (PCRE) syntax is required. If you configure this field, it must contain a valid expression or the {{ microshift_short }} service fails. At least one pattern must match a client certificate's distinguished name; otherwise, the ingress controller rejects the certificate and denies the connection.</td>
</tr>
<tr>
  <td><code>ingress.clientTLS.ClientCA</code></td>
  <td><code>string</code></td>
  <td>Required subfield that specifies a config map in the <code>openshift-ingress</code> namespace. The config map must contain a CA certificate bundle.</td>
</tr>
<tr>
  <td><code>ingress.clientTLS.ClientCertificatePolicy</code></td>
  <td><code>Required</code>, <code>Optional</code></td>
  <td>Required subfield that creates a secure route using reencrypt TLS termination with a custom certificate. You must have a certificate/key pair in PEM-encoded files, where the certificate is valid for the route host. The ingress controller only checks client certificates for edge-terminated and reencrypt TLS routes. Certificates for plain text HTTP or passthrough TLS routes are not checked with this setting.</td>
</tr>
<tr>
  <td><code>ingress.defaultHTTPVersion</code></td>
  <td><code>number</code></td>
  <td>Determines the default HTTP version to be used for ingress. The default value is <code>1</code>, which is the HTTP/1.1 protocol.</td>
</tr>
<tr>
  <td><code>ingress.forwardedHeaderPolicy</code></td>
  <td><code>Append</code>, <code>Replace</code>, <code>IfNone</code>, <code>Never</code></td>
  <td>Specifies when and how the ingress controller sets the <code>Forwarded</code>, <code>X-Forwarded-For</code>, <code>X-Forwarded-Host</code>, <code>X-Forwarded-Port</code>, <code>X-Forwarded-Proto</code>, and <code>X-Forwarded-Proto-Version</code> HTTP headers. The default value is <code>Append</code>.<br><br><ul><li><code>Append</code> specifies that the ingress controller appends existing headers.</li><li><code>Replace</code> specifies that the ingress controller sets the headers and replaces any existing <code>Forwarded</code> or <code>X-Forwarded-*</code> headers.</li><li><code>IfNone</code> specifies that the ingress controller sets headers if they are not already set.</li><li><code>Never</code> specifies that ingress controller never sets the headers, preserving any existing headers.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.httpCompression</code></td>
  <td><code>object</code></td>
  <td>Defines a policy for HTTP traffic compression. There is no HTTP compression by default.</td>
</tr>
<tr>
  <td><code>ingress.httpCompression.mimeTypes</code></td>
  <td><code>array</code> or null</td>
  <td>A list of MIME types to compress. When the list is empty, the ingress controller does not apply any compression. To define a list, use the format of the Content-Type definition in RFC 1341 that specifies the type and subtype of data in the body of a message and the native encoding of the data. For example, <code>Content-Type := type \"/\" subtype *[\";\" parameter]</code>.<br><br><ul><li>The value of <code>Content-Type</code> can be one of the following types: application, audio, image, message, multipart, text, video, or a custom type preceded by <code>\"X-\"</code> and followed by a token. The token must be defined in one of the following ways:</li><li>The token is a <code>string</code> of at least one character, and does not contain white spaces, control characters, or any of the characters in the <code>tspecials</code> set.</li><li>The <code>tspecials</code> set contains the characters <code>()\u003c\u003e@,;:\\\"/[]?.=</code>.</li><li>The subtype in Content-Type is also a token.</li><li>The optional parameters following the subtype are defined as <code>token \"=\" (token / quoted-string)</code>.</li><li>The <code>quoted-string</code>, as defined in RFC 822, is surrounded by double quotes and can contain white spaces plus any character except <code>\\</code>, <code>\"</code>, and <code>CR</code>. The <code>quoted-string</code> can also contain any single ASCII character if it is escaped by the following characters: <code>\\.",</code>.</li></ul>Not all MIME types benefit from compression, but <code>HAProxy</code> uses resources to try to compress files when compression is configured. Generally speaking, text formats such as <code>html</code>, <code>ccs</code>, and <code>js</code> benefit from compression. Spending CPU resources to compress file types that are already compressed, such as images, audio, and video, is probably not worth the limited benefit.</td>
</tr>
<tr>
  <td><code>ingress.httpEmptyRequestsPolicy</code></td>
  <td><code>Respond</code> or <code>Ignore</code></td>
  <td>The default value is <code>Respond</code>. Describes how HTTP connections should be handled if the connection times out before a request is received. These connections typically come from the health probes of a load balancer service or a web browser's speculative connections, such as a <code>preconnect</code>.<br><br><ul><li>If the field is set to <code>Respond</code>, the ingress controller sends an "HTTP 400" or "408" response, logs the connection if access logging is enabled, and counts the connection in the appropriate metrics.</li><li>If the field is set to <code>Ignore</code>, the ingress controller closes the connection without sending a response, logging the connection, or incrementing metrics. Setting this field to <code>Ignore</code> might impede detection and diagnosis of problems or intrusions, especially when timed-out connections are caused by network errors or port scans. In both cases, logging empty requests can be useful for diagnosing errors and detecting intrusion attempts.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.listenAddress</code></td>
  <td>IP address, NIC name, or multiple</td>
  <td>Value defaults to the entire network of the host. The valid configurable value is a list that can be either a single IP address or NIC name or multiple IP addresses and NIC names.</td>
</tr>
<tr>
  <td><code>ingress.logEmptyRequests</code></td>
  <td><code>Log</code> or <code>Ignore</code></td>
  <td>The default value is <code>Log</code>. Specifies how connections on which empty requests are received are logged. These connections typically come from the health probes of a load balancer service health or a web browser's speculative connections, such as a <code>preconnect</code>. Logging typical requests might be undesirable, but requests can also be caused by network errors or port scans, in which case logging can be useful for diagnosing errors and detecting intrusion attempts.</td>
</tr>
<tr>
  <td><code>ingress.ports.http</code></td>
  <td><code>80</code></td>
  <td>The default port shown. Configurable. Valid value is a single, unique port in the <code>1-65535</code> range. The values of the <code>ports.http</code> and <code>ports.https</code> fields cannot be the same.</td>
</tr>
<tr>
  <td><code>ingress.ports.https</code></td>
  <td><code>443</code></td>
  <td>The default port shown. Configurable. Valid value is a single, unique port in the <code>1-65535</code> range. The values of the <code>ports.http</code> and <code>ports.https</code> fields cannot be the same.</td>
</tr>
<tr>
  <td><code>ingress.routeAdmissionPolicy</code></td>
  <td><code>namespaceOwnership</code> or <code>wildcardPolicy</code></td>
  <td>Defines a policy for handling new route claims, such as allowing or denying claims across namespaces. By default, allows routes to claim different paths of the same hostname across namespaces.</td>
</tr>
<tr>
  <td><code>ingress.routeAdmissionPolicy.namespaceOwnership</code></td>
  <td><code>Strict</code> or <code>InterNamespaceAllowed</code></td>
  <td>Describes how hostname claims across namespaces should be handled. The default value is <code>InterNamespaceAllowed</code>. Specifying <code>Strict</code> prevents routes in different namespaces from claiming the same hostname. If the value is deleted in a customized {{ microshift_short }} <code>config.yaml</code> file, the <code>InterNamespaceAllowed</code> value is automatically set.<br><br><ul><li><code>Strict</code>: does not allow routes to claim the same hostname across namespaces.</li><li><code>InterNamespaceAllowed</code>: allows routes to claim different paths of the same hostname across namespaces.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.routeAdmissionPolicy.wildcardPolicy</code></td>
  <td><code>WildcardsAllowed</code> or <code>WildcardsDisallowed</code></td>
  <td>Describes how routes with wildcard policies are handled by the ingress controller.<br><br><ul><li><code>WildcardsAllowed</code>: Indicates routes with any wildcard policy are admitted by the ingress controller.</li><li><code>WildcardsDisallowed</code>: Indicates only routes with a wildcard policy of <code>None</code> are admitted by the ingress controller. Updating <code>wildcardPolicy</code> from <code>WildcardsAllowed</code> to <code>WildcardsDisallowed</code> causes admitted routes with a wildcard policy of <code>Subdomain</code> to stop working. These routes must be recreated to a wildcard policy of <code>None</code> to be readmitted by the ingress controller. <code>WildcardsDisallowed</code> is the default setting.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.status</code></td>
  <td><code>Managed</code> or <code>Removed</code></td>
  <td>Router status. The default is <code>Managed</code>.</td>
</tr>
<tr>
  <td><code>ingress.tlsSecurityProfile</code></td>
  <td><code>object</code></td>
  <td>Specifies settings for ingress controllers TLS connections. If you do not set one, the default value is based on the <code>apiservers.config.openshift.io/cluster</code> resource.</td>
</tr>
<tr>
  <td><code>ingress.tlsSecurityProfile.type</code></td>
  <td><code>Old</code>, <code>Intermediate</code>, <code>Modern</code>, <code>Custom</code></td>
  <td>Specifies the profile type for the TLS Security. The default value is <code>Intermediate</code>.<br><br>When using the <code>Old</code>, <code>Intermediate</code>, and <code>Modern</code> profile types, the effective profile configuration is subject to change between releases. For example, given a specification to use the <code>Intermediate</code> profile deployed on release <code>X.Y.Z</code>, an upgrade to release <code>X.Y.Z+1</code> might cause a new profile configuration to be applied to the ingress controller, resulting in a rollout.</td>
</tr>
<tr>
  <td><code>ingress.tlsSecurityProfile.minTLSVersion</code></td>
  <td><code>number</code></td>
  <td>Specifies the TLS version for ingress controllers.<br><br>The minimum TLS version is <code>1.1</code>, and the maximum TLS version is <code>1.3</code>.<br><br><ul><li>Ciphers and the minimum TLS version of the configured security profile are reflected in the <code>TLSProfile</code> status.</li><li>The ingress controller converts the TLS <code>1.0</code> of an <code>Old</code> or <code>Custom</code> profile to <code>1.1</code>.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions</code></td>
  <td>Objects</td>
  <td>Specifies options for tuning the performance of ingress controller pods.</td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.clientFinTimeout</code></td>
  <td><code>string</code> with format <code>duration</code></td>
  <td>Defines how long a connection is held open while waiting for a client response to the server/backend before closing the connection. The default timeout is <code>1s</code>, which is 1 second.</td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.clientTimeout</code></td>
  <td><code>string</code> with format <code>duration</code></td>
  <td>Defines how long a connection is held open while waiting for a client response. The default timeout is <code>30s</code>, which is 30 seconds.</td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.headerBufferBytes</code></td>
  <td>An <code>integer</code> with the <code>format</code> of <code>int32</code>; <code>16384</code> is the minimum value when HTTP/2 is enabled.</td>
  <td>Describes how much memory in bytes must be reserved for <code>IngressController</code> connection sessions. The default value is <code>32768</code> in bytes.<br><br><ul><li>Setting this field is generally not recommended because <code>headerBufferBytes</code> values that are too small can break the <code>IngressController</code> and <code>headerBufferBytes</code> values that are too large can cause the <code>IngressController</code> to use significantly more memory than necessary.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.headerBufferMaxRewriteBytes</code></td>
  <td><code>integer</code>, formatted <code>int32</code>; <code>4096</code> is the minimum value</td>
  <td>Describes how much memory in bytes must be reserved from <code>headerBufferBytes</code> for HTTP header rewriting and appending for <code>IngressController</code> connection sessions. The default value is <code>8192</code> bytes. Incoming HTTP requests are limited to the <code>headerBufferBytes</code> bytes minus the <code>headerBufferMaxRewriteBytes</code> bytes, meaning that the value of <code>headerBufferBytes</code> must be greater than the value of <code>headerBufferMaxRewriteBytes</code>.<br><br><ul><li>Setting this field is generally not recommended because <code>headerBufferMaxRewriteBytes</code> values that are too small can break the <code>IngressController</code> and <code>headerBufferMaxRewriteBytes</code> values that are too large can cause the <code>IngressController</code> to use significantly more memory than necessary.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.healthCheckInterval: ""</code></td>
  <td><code>string</code> with pattern: <code>^(0|([0-9]+(\\.[0-9]+)?(ns|us|µs|μs|ms|s|m|h))+)$</code></td>
  <td>The default <code>healthCheckInterval</code> value is <code>5s</code>, which is 5 seconds. This parameter value defines how long the router waits between two consecutive health checks on the router's configured backends. The minimum allowed value is <code>1s</code> and the maximum allowed value is <code>2147483647ms</code>, which is 24.85 days.<br><br><ul><li>This value is applied globally as a default for all routes, but can be overridden per-route by the route annotation <code>router.openshift.io/haproxy.health.check.interval</code>.</li><li>Requires an unsigned duration string of decimal numbers, each with an optional fraction and unit suffix, such as <code>300ms</code>, <code>1.5h</code> or <code>2h45m</code>. Valid time units are <code>ns</code>, <code>us</code> (or <code>µs</code> U+00B5 or <code>μs</code> U+03BC), <code>ms</code>, <code>s</code>, <code>m</code>, <code>h</code>.</li><li>Setting this parameter value to less than <code>5s</code> can cause excess traffic due to too frequent TCP health checks and accompanying SYN packet storms.</li><li>Setting this parameter value too high can result in increased latency because of backend servers that are no longer available, but have not yet been detected as such.</li><li>An empty or <code>0</code> value means "no opinion" and the ingress controller chooses a default. Note that the default value might change in future releases.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.maxConnections</code></td>
  <td><code>integer</code>, valid values are: <code>empty</code>, <code>0</code>, <code>-1</code>, and the range <code>2000-2000000</code></td>
  <td>The default value is <code>0</code>. defines the maximum number of simultaneous connections that can be established per <code>HAProxy</code> process. Increasing this value allows each ingress controller pod to handle more connections at the cost of additional system resources being consumed.<br><br><ul><li>If this field is empty or <code>0</code>, the <code>IngressController</code> uses the default value of <code>50000</code>, but the default is subject to change in future releases.</li><li>If the value is <code>-1</code>, then <code>HAProxy</code> dynamically computes a maximum value based on the available resources set with <code>ulimit</code> values in the running container. Selecting <code>-1</code>, which means <code>auto</code>, results in a large value being computed, and therefore each <code>HAProxy</code> process incurs significant memory usage compared with the current default of <code>50000</code>.</li><li>Setting a value that is greater than the current operating system limit prevents the <code>HAProxy</code> process from starting.</li><li>You can monitor memory usage for router containers with the following metric:</li></ul><pre>container_memory_working_set_bytes{container=`router`,namespace=`openshift-ingress`}`</pre><br><br><ul><li>You can monitor memory usage of individual <code>HAProxy</code>processes in router containers with the following metric:</li></ul><pre>container_memory_working_set_bytes{container=`router`,namespace=`openshift-ingress`}/container_processes{container=`router`,namespace=`openshift-ingress`}</pre></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.serverFinTimeout</code></td>
  <td><code>string</code> in the format <code>duration</code></td>
  <td>Defines how long a connection is held open while waiting for a server or backend response to the client before closing the connection. The default timeout is <code>1s</code>.</td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.serverTimeout</code></td>
  <td><code>string</code> in the format <code>duration</code></td>
  <td>Defines how long a connection is held open while waiting for a server or backend response. The default timeout is <code>30s</code>.</td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.threadCount</code></td>
  <td><code>integer</code> in the form <code>int32</code>; minimum value is <code>1</code>, maximum is <code>64</code></td>
  <td>Defines the number of threads created per <code>HAProxy</code> process. The default value is <code>4</code>. If this field is empty, the default value is used.<br><br><ul><li>Setting this field is generally not recommended. Creating more threads allows each ingress controller pod to handle more connections at the cost of more system resources being used. Increasing the number of HAProxy threads allows the ingress controller pods to use more CPU time under load, potentially starving other pods if set too high. Conversely, reducing the number of threads may cause the ingress controller to perform poorly.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.tlsInspectDelay</code></td>
  <td><code>string</code> in the format <code>duration</code></td>
  <td>Defines how long the router can hold data to find a matching route. Setting this interval with too short a value can cause the router to revert to the default certificate for edge-terminated clients or re-encrypt routes, even when a better-matching certificate could be used.<br><br><ul><li>The default inspect delay is <code>5s</code> which is 5 seconds, which is expected to be sufficient for most cases. Increasing the value of this configuration specifically for high-latency networks can cause a delay in finishing the SSL handshake. Any configured value must be transparent to your application.</li></ul></td>
</tr>
<tr>
  <td><code>ingress.tuningOptions.tunnelTimeout</code></td>
  <td><code>string</code> in the format <code>duration</code></td>
  <td>Defines how long a tunnel connection, including websockets, are held open while the tunnel is idle. The default timeout is <code>1h</code>, which is 1 hour.</td>
</tr>
<tr>
  <td><code>kubelet</code></td>
  <td>See the {{ microshift_short }} low-latency instructions</td>
  <td>Parameter for passthrough configuration of the kubelet node agent. Used for low-latency configuration. The default value is null.</td>
</tr>
<tr>
  <td><code>manifests</code></td>
  <td><code>list of paths</code></td>
  <td>The locations on the file system to scan for <code>kustomization</code> files to use to load manifests. Set to a list of paths to scan only those paths. Set to an empty list to disable loading manifests. The entries in the list can be glob patterns to match multiple subdirectories. The default values are <code>/usr/lib/microshift/manifests</code>, <code>/usr/lib/microshift/manifests.d/</code>, <code>/etc/microshift/manifests</code>, and <code>/etc/microshift/manifests.d/</code>.</td>
</tr>
<tr>
  <td><code>network.clusterNetwork</code></td>
  <td>IP address block</td>
  <td>A block of IP addresses from which pod IP addresses are allocated. IPv4 is the default network. Dual-stack entries are supported. The first entry in this field is immutable after {{ microshift_short }} starts. The default range is <code>10.42.0.0/16</code>.</td>
</tr>
<tr>
  <td><code>network.cniPlugin</code></td>
  <td>String</td>
  <td>Deploys the Open Virtual Networking - Kubernetes (OVN-K) network plugin as the default container network interface (CNI) when empty or set to <code>"ovnk"</code>. Supported values are empty, <code>""</code> or <code>"ovnk"</code>. Setting to <code>"none"</code> removes the CNI and is not recommended. Only OVN-K is managed by {{ microshift_short }}.</td>
</tr>
<tr>
  <td><code>network.multus.status</code></td>
  <td><code>string</code></td>
  <td>Controls the deployment of the Multus Container Network Interface (CNI). The default status is <code>Disabled</code>. If you set the value to <code>Enabled</code>, the Multus CNI cannot be deleted.</td>
</tr>
<tr>
  <td><code>network.serviceNetwork</code></td>
  <td>IP address block</td>
  <td>A block of virtual IP addresses for Kubernetes services. IP address pool for services. IPv4 is the default. Dual-stack entries are supported. The first entry in this field is immutable after {{ microshift_short }} starts. The default range is <code>10.43.0.0/16</code>.</td>
</tr>
<tr>
  <td><code>network.serviceNodePortRange</code></td>
  <td><code>range</code></td>
  <td>The port range allowed for Kubernetes services of type <code>NodePort</code>. If you do not specify the range, the default range of <code>30000-32767</code> is used. Services without a <code>NodePort</code> specified are automatically allocated one from this range. This parameter can be updated after {{ microshift_short }} starts.</td>
</tr>
<tr>
  <td><code>node.hostnameOverride</code></td>
  <td><code>string</code></td>
  <td>The name of the node. The default value is the hostname. If non-empty, this string is used to identify the node instead of the hostname. This value is immutable after {{ microshift_short }} starts.</td>
</tr>
<tr>
  <td><code>node.nodeIP</code></td>
  <td>IPv4 address</td>
  <td>The IPv4 address of the node. The default value is the IP address of the default route.</td>
</tr>
<tr>
  <td><code>nodeIPv6</code></td>
  <td>IPv6 address</td>
  <td>The IPv6 address for the node for dual-stack configurations. Cannot be configured in single stack for either IPv4 or IPv6. The default is an empty value or null.</td>
</tr>
<tr>
  <td><code>storage.driver</code></td>
  <td><code>none</code> or <code>lvms</code></td>
  <td>The default value is empty. An empty value or null field defaults to LVMS deployment.</td>
</tr>
<tr>
  <td><code>storage.optionalCsiComponents</code></td>
  <td><code>array</code></td>
  <td>The default value is null or an empty array. A null or empty array defaults to deploying <code>snapshot-controller</code>. Expected values are <code>csi-snapshot-controller</code> or <code>none</code>. A value of <code>none</code> is mutually exclusive with all other values.</td>
</tr>
<tr>
  <td><code>telemetry.endpoint</code></td>
  <td><code>https://infogw.api.openshift.com</code></td>
  <td>The endpoint where telemetry data is sent. No user or private data is included in the metrics reported. The default value is <code>https://infogw.api.openshift.com</code>.</td>
</tr>
<tr>
  <td><code>telemetry.status</code></td>
  <td><code>Enabled</code></td>
  <td>Telemetry status, which can be <code>Enabled</code> or <code>Disabled</code>. The default value is <code>Enabled</code>.</td>
</tr>
</tbody>
</table>