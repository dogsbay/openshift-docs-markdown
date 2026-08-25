{%- set _mod_docs_content_type = "CONCEPT" %}
# About the {{ js_operator }} {id="js-about_{{ context }}"}

Use the {{ js_operator }} on {{ product_title }} to manage large, distributed, and coordinated computing workloads, such as high-performance computing (HPC) or artificial intelligence (AI) training, and gain automatic stability, coordination, and failure recovery. {._abstract}

The {{ js_operator }} is based on the JobSet open source project.

{{ js_operator }} is designed to manage a group of jobs as a single, coordinated unit. This is especially useful for fields like HPC and training massive AI models where you need a team of machines to run for hours or days.

You can use the {{ js_operator }} to solve problems that are too big or too complex for a standard {{ product_title }} job. The {{ js_operator }} provides coordination, stability, and recovery.

The {{ js_operator }} automatically sets up stable headless service to get an IP address so workers can find and communicate with each other, even after a failure and restart. It also provides automatic failure recovery. If one small part of a large training job fails, the Operator can be configured to restart the entire group of workers from a saved checkpoint. This saves time and computing costs.

The {{ js_operator }} offers startup control, allowing you to define a specific startup sequence to ensure dependencies are met. For example, making sure the leader is running before any workers attempt to connect.

{{ js_operator }} makes managing large, distributed, and coordinated computing tasks on {{ product_title }} easier, turning many individual components into one resilient and manageable system.

**Additional resources**
{._additional-resources}

*   [JobSet project](https://jobset.sigs.k8s.io/docs/overview/)