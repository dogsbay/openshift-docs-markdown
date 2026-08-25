{%- set _mod_docs_content_type = "CONCEPT" %}
# About Hyper-Threading for low latency and real-time applications {id="cnf-about-hyper-threading-for-low-latency-and-real-time-applications_{{ context }}"}

You can use Hyper-Threading, an Intel processor technology, to allow a physical CPU processor core to function as two logical cores, executing two independent threads simultaneously. {._abstract}

Hyper-Threading allows for better system throughput for certain workload types where parallel processing is beneficial. The default {{ product_title }} configuration expects Hyper-Threading to be enabled.

For telecommunications applications, design your application infrastructure to minimize latency as much as possible. Hyper-Threading can slow performance times and negatively affect throughput for compute-intensive workloads that require low latency. Disabling Hyper-Threading ensures predictable performance and can decrease processing times for these workloads.


:::note

Hyper-Threading implementation and configuration differs depending on the hardware you are running {{ product_title }} on. Consult the relevant host hardware tuning information for more details of the Hyper-Threading implementation specific to that hardware. Disabling Hyper-Threading can increase the cost per core of the cluster.

:::