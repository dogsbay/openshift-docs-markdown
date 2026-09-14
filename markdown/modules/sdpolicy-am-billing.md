{%- set _mod_docs_content_type = "CONCEPT" %}
# Billing options {id="billing_{{ context }}"}

Customers have the option to buy annual subscriptions of {{ product_title }} or consume on-demand through cloud marketplaces. Customers can decide to bring their own cloud infrastructure account, referred to as Customer Cloud Subscription (CCS), or deploy in cloud provider accounts owned by Red Hat. The table below provides additional information regarding billing and the corresponding supported deployment options.
<table>
<thead>
<tr>
  <th>{{ product_title }} Subscription-type</th>
  <th>Cloud infrastructure account</th>
  <th>Billed through</th>
</tr>
</thead>
<tbody>
<tr>
  <td rowspan="2">Annual fixed capacity subscriptions through Red Hat</td>
  <td>Red Hat cloud account</td>
  <td>Red Hat for consumption of both {{ product_title }} subscriptions and cloud infrastructure</td>
</tr>
<tr>
  <td>Customer's own cloud account</td>
  <td>Red Hat for consumption of the {{ product_title }} subscriptions<br><br>Cloud provider for consumption of cloud infrastructure</td>
</tr>
<tr>
  <td>On-demand usage-based consumption through {{ gcp_full }} Marketplace</td>
  <td>Customer's own {{ gcp_full }} account</td>
  <td>{{ gcp_full }} for both cloud infrastructure and {{ product_title }} subscriptions</td>
</tr>
</tbody>
</table>


:::important

Customers that use their own cloud infrastructure account, referred to as Customer Cloud Subscription (CCS), are responsible to pre-purchase or provide Reserved Instance (RI) compute instances to ensure lower cloud infrastructure costs.

:::


Additional resources can be purchased for an {{ product_title }} cluster, including:

*   Additional nodes (can be different types and sizes through the use of machine pools)
*   Middleware (JBoss EAP, JBoss Fuse, and so on) - additional pricing based on specific middleware component
*   Additional storage in increments of 500 GB (non-CCS only; 100 GB included)
*   Additional 12 TiB Network I/O (non-CCS only; 12 TB included)
*   Load Balancers for Services are available in bundles of 4; enables non-HTTP/SNI traffic or non-standard ports (non-CCS only)