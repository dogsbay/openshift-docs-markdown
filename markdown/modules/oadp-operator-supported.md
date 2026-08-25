{%- set _mod_docs_content_type = "REFERENCE" %}
# Support for {{ oadp_full }} {id="oadp-operator-supported_{{ context }}"}

Review the {{ oadp_short }} support matrix for version compatibility with {{ product_title }} releases and lifecycle policy information, including Extended Update Support (EUS) options. {._abstract}

***Supported versions of {{ oadp_short }}***

<table>
<thead>
<tr>
  <th>Version</th>
  <th>{{ product_title }} version</th>
  <th>General availability</th>
  <th>Full support ends</th>
  <th>Maintenance ends</th>
  <th>Extended Update Support (EUS)</th>
  <th>Extended Update Support Term 2 (EUS Term 2)</th>
  <th>1.6</th>
</tr>
</thead>
<tbody>
<tr>
  <td><ul><li>4.22</li></ul></td>
  <td>09 Jun 2026</td>
  <td>Release of 1.7</td>
  <td>Release of 1.8</td>
  <td>30 Jun 2028</td>
  <td>30 Jun 2029</td>
  <td>1.5</td>
  <td><ul><li>4.19</li><li>4.20</li><li>4.21</li></ul></td>
</tr>
<tr>
  <td>17 June 2025</td>
  <td>Release of 1.6</td>
  <td>Release of 1.7</td>
  <td>30 Jun 2028</td>
  <td>30 Jun 2029<br><br><br><br>EUS must be on {{ product_title }} 4.21</td>
  <td>EUS Term 2 must be on {{ product_title }} 4.21</td>
  <td>1.4</td>
  <td><ul><li>4.14</li><li>4.15</li><li>4.16</li><li>4.17</li><li>4.18</li></ul></td>
</tr>
<tr>
  <td>10 Jul 2024</td>
  <td>Release of 1.5</td>
  <td>Release of 1.6</td>
  <td>27 Jun 2026<br><br>EUS must be on {{ product_title }} 4.16</td>
  <td>27 Jun 2027<br><br>EUS Term 2 must be on {{ product_title }} 4.16</td>
  <td>1.3</td>
  <td><ul><li>4.12</li><li>4.13</li><li>4.14</li><li>4.15</li></ul></td>
  <td>29 Nov 2023</td>
</tr>
<tr>
  <td>10 Jul 2024</td>
  <td>Release of 1.5</td>
  <td>31 Oct 2025<br><br>EUS must be on {{ product_title }} 4.14</td>
  <td>31 Oct 2026<br><br>EUS Term 2 must be on {{ product_title }} 4.14</td>
</tr>
</tbody>
</table>

## Unsupported versions of the {{ oadp_short }} Operator {id="oadp-operator-unsupported_{{ context }}"}

**Previous versions of the {{ oadp_short }} Operator which are no longer supported**

|     |     |     |     |     |
| --- | --- | --- | --- | --- |
| Version | General availability | Full support ended | Maintenance ended | 1.2 |
| 14 Jun 2023 | 29 Nov 2023 | 10 Jul 2024 | 1.1 | 01 Sep 2022 |
| 14 Jun 2023 | 29 Nov 2023 | 1.0 | 09 Feb 2022 | 01 Sep 2022 |

For more details about EUS, see [Extended Update Support](https://access.redhat.com/support/policy/updates/openshift#eus).

For more details about EUS Term 2, see [Extended Update Support Term 2](https://access.redhat.com/support/policy/updates/openshift#eust2).