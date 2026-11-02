{%- set _mod_docs_content_type = "REFERENCE" %}
# Supported platforms and versions for CPU hot-plug {id="virt-hot-plugging-cpu-support_{{ context }}"}

Different operating systems provide different levels of support for hot-plugging CPUs. {._abstract}

<table>
<tbody>
<tr>
  <td>Operating system</td>
  <td>Version</td>
  <td>Architecture</td>
  <td>Hot plug support</td>
</tr>
<tr>
  <td>{{ op_system_base_full }}</td>
  <td>8.10</td>
  <td>x86</td>
  <td>Yes</td>
</tr>
<tr>
  <td>{{ op_system_base_full }}</td>
  <td>9.0 and later</td>
  <td>x86</td>
  <td>Yes</td>
</tr>
<tr>
  <td>{{ op_system_base_full }}</td>
  <td>10</td>
  <td>x86</td>
  <td>Yes</td>
</tr>
<tr>
  <td>Windows Server 2016</td>
  <td>All</td>
  <td>x86</td>
  <td>Yes (hot unplug not supported)</td>
</tr>
<tr>
  <td>Windows Server 2019</td>
  <td>All</td>
  <td>x86</td>
  <td>Yes (hot unplug not supported)</td>
</tr>
<tr>
  <td>Windows Server 2022</td>
  <td>All</td>
  <td>x86</td>
  <td>Yes (hot unplug not supported)</td>
</tr>
<tr>
  <td>Windows Server 2025</td>
  <td>All</td>
  <td>x86</td>
  <td>Yes  (hot unplug not supported)</td>
</tr>
</tbody>
</table>

For information on how to troubleshoot issues with offline hot plugged CPUs, see [Hotplugged CPU is offline in the RHEL Guest, unable to bring online](https://access.redhat.com/solutions/7134081).

{{ VirtProductName }} may inadverently pass nested virtualization extensions (VMX, SVM) to the guest. Nested Virtualization is not officially supported and generally not recommended, except in specific cases. For more information about this issue, see [CNV-68983: Nested Virtualization may get enabled inadvertently if no default cluster cpu model set](https://redhat.atlassian.net/browse/CNV-68983).