{%- set _mod_docs_content_type = "REFERENCE" %}
# FIPS validation in {{ product_title }} {id="installation-about-fips-validation_{{ context }}"}

{{ product_title }} uses certain FIPS validated or Modules In Process modules within {{ op_system_base }} and {{ op_system }} for the operating system components that it uses. {._abstract}

For more information, see "RHEL core crypto components" in the _Additional resources_ section. For example, when users use SSH to connect to {{ product_title }} clusters and containers, those connections are properly encrypted.

{{ product_title }} components are written in Go and built with Red Hat’s golang compiler. When you enable FIPS mode for your cluster, all {{ product_title }} components that require cryptographic signing call {{ op_system_base }} and {{ op_system }} cryptographic libraries.

**FIPS mode attributes and limitations in {{ product_title }} {{ product_version }}**

<table>
<thead>
<tr>
  <th>Attributes</th>
  <th>Limitations</th>
</tr>
</thead>
<tbody>
<tr>
  <td>FIPS support in {{ op_system_base }} 9 and {{ op_system }} operating systems.</td>
  <td rowspan="4">The FIPS implementation does not use a function that performs hash computation and signature generation or validation in a single step. This limitation will continue to be evaluated and improved in future {{ product_title }} releases.</td>
</tr>
<tr>
  <td>FIPS support in CRI-O runtimes.</td>
</tr>
<tr>
  <td>FIPS support in {{ product_title }} services.</td>
</tr>
<tr>
  <td>FIPS validated or Modules In Process cryptographic module and algorithms that are obtained from {{ op_system_base }} 9 and {{ op_system }} binaries and images.</td>
</tr>
<tr>
  <td>Use of FIPS compatible golang compiler.</td>
  <td>TLS FIPS support is not complete but is planned for future {{ product_title }} releases.</td>
</tr>
<tr>
  <td>FIPS support across multiple architectures.</td>
  <td>FIPS is currently only supported on {{ product_title }} deployments using <code>x86_64</code>, <code>ppc64le</code>, and <code>s390x</code> architectures.</td>
</tr>
</tbody>
</table>