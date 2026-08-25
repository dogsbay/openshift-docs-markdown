{%- set _mod_docs_content_type = "CONCEPT" %}
# Optimizing the MTU for your network {id="optimizing-mtu_{{ context }}"}

You can optimize the MTU value of your network so that your network is optimized for throughput or low latency.  {._abstract}

There are two important maximum transmission units (MTUs): the network interface controller (NIC) MTU and the cluster network MTU.

The NIC MTU is configured at the time of {{ product_title }} installation, and you can also change the MTU of a cluster as a postinstallation task. For more information, see "Changing cluster network MTU".

For a cluster that uses the OVN-Kubernetes plugin, the MTU must be at least `100` bytes less than the maximum supported value of the NIC of your network. If you are optimizing for throughput, choose the largest possible value, such as `8900`. If you are optimizing for lowest latency, choose a lower value.


:::important

If your cluster uses the OVN-Kubernetes plugin and the network uses a NIC to send and receive unfragmented jumbo frame packets over the network, you must specify `9000` bytes as the MTU value for the NIC so that pods do not fail.

:::