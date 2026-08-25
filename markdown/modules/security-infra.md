{%- set _mod_docs_content_type = "CONCEPT" %}
# Bare-metal infrastructure {id="security-infra_{{ context }}"}

Bare-metal infrastructure for {{ product_title }} clusters in telco and finance industries requires specific hardware and network configurations. {._abstract}


Hardware requirements
:   In several industries, such as telco and finance, clusters are primarily built on bare-metal hardware. This means that the {{ op_system_first }} operating system is installed directly on the physical machines, without using virtual machines. This reduces network connectivity complexity, minimizes latency, and optimizes CPU usage for applications.


Network requirements
:   Networks in these industries sometimes require much higher bandwidth compared to standard IT networks. For example, Telco networks commonly use dual-port 25 GB connections or 100 GB network interface cards (NICs) to handle massive data throughput. Security is critical, requiring encrypted connections and secure endpoints to protect sensitive personal data.