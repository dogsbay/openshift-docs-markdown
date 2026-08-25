{%- set _mod_docs_content_type = "CONCEPT" %}
# Operators for running AI workloads {id="ai-operators_{{ context }}"}

You can use Operators to run artificial intelligence (AI) and machine learning (ML) workloads on {{ product_title }}. With Operators, you can build a customized environment that meets your specific AI/ML requirements while continuing to use {{ product_title }} as the core platform for your applications. {._abstract}

{{ product_title }} provides several Operators that can help you run AI workloads:


{{ kueue_name }}
:   You can use {{ kueue_name }} to provide structured queues and prioritization so that workloads are handled fairly and efficiently. Without proper prioritization, important jobs might be delayed while less critical jobs occupy resources.

    For more information, see "Introduction to {{ kueue_name }}".


{{ lws_operator }}
:   You can use the {{ lws_operator }} to enable large-scale AI inference workloads to run reliably across nodes with synchronization between leader and worker processes. Without proper coordination, large training runs might fail or stall.

    For more information, see "{{ lws_operator }} overview".


{{ js_operator }}
:   You can use the {{ js_operator }} to easily manage and run large-scale, coordinated workloads like high-performance computing (HPC) and AI training. The {{ js_operator }} can help you gain fast recovery and efficient resource use through features like multi-template job support and stable networking.

    For more information, see "{{ js_operator }} overview".