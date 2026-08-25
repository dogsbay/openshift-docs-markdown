{% if context == "installing-log-storage" %}
{%- set restricted = true -%}
{% endif %}

{%- set _mod_docs_content_type = "CONCEPT" %}
# Loki deployment sizing {id="loki-deployment-sizing_{{ context }}"}

Sizing for Loki follows the format of `1x.<size>` where the value `1x` is number of instances and `<size>` specifies performance capabilities.


:::important

It is not possible to change the number `1x` for the deployment size.

:::


**Loki sizing**

<table>
<thead>
<tr>
  <th></th>
  <th>1x.demo</th>
  <th>1x.extra-small</th>
  <th>1x.small</th>
  <th>1x.medium</th>
</tr>
</thead>
<tbody>
<tr>
  <td>Data transfer</td>
  <td>Demo use only</td>
  <td>100GB/day</td>
  <td>500GB/day</td>
  <td>2TB/day</td>
</tr>
<tr>
  <td>Queries per second (QPS)</td>
  <td>Demo use only</td>
  <td>1-25 QPS at 200ms</td>
  <td>25-50 QPS at 200ms</td>
  <td>25-75 QPS at 200ms</td>
</tr>
<tr>
  <td>Replication factor</td>
  <td>None</td>
  <td>2</td>
  <td>2</td>
  <td>2</td>
</tr>
<tr>
  <td>Total CPU requests</td>
  <td>None</td>
  <td>14 vCPUs</td>
  <td>34 vCPUs</td>
  <td>54 vCPUs</td>
</tr>
<tr>
  {% if restricted %}<td>Total CPU requests if using the ruler</td>{% endif %}
  {% if restricted %}<td>None</td>{% endif %}
  {% if restricted %}<td>16 vCPUs</td>{% endif %}
  {% if restricted %}<td>42 vCPUs</td>{% endif %}
  {% if restricted %}<td>70 vCPUs</td>{% endif %}
</tr>
<tr>
  <td>Total memory requests</td>
  <td>None</td>
  <td>31Gi</td>
  <td>67Gi</td>
  <td>139Gi</td>
</tr>
<tr>
  {% if restricted %}<td>Total memory requests if using the ruler</td>{% endif %}
  {% if restricted %}<td>None</td>{% endif %}
  {% if restricted %}<td>35Gi</td>{% endif %}
  {% if restricted %}<td>83Gi</td>{% endif %}
  {% if restricted %}<td>171Gi</td>{% endif %}
</tr>
<tr>
  <td>Total disk requests</td>
  <td>40Gi</td>
  <td>430Gi</td>
  <td>430Gi</td>
  <td>590Gi</td>
</tr>
<tr>
  {% if restricted %}<td>Total disk requests if using the ruler</td>{% endif %}
  {% if restricted %}<td>80Gi</td>{% endif %}
  {% if restricted %}<td>750Gi</td>{% endif %}
  {% if restricted %}<td>750Gi</td>{% endif %}
  {% if restricted %}<td>910Gi</td>{% endif %}
</tr>
</tbody>
</table>

{% if context == "installing-log-storage" %}
{%- set restricted = "" -%}
{% endif %}