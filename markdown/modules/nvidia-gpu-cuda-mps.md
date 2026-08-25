{%- set _mod_docs_content_type = "CONCEPT" %}
# CUDA Multi-Process Service {id="nvidia-gpu-cuda-mps_{{ context }}"}

CUDA Multi-Process Service (MPS) allows a single GPU to use multiple CUDA processes. The processes run in parallel on the GPU, eliminating saturation of the GPU compute resources.  {._abstract}

MPS also enables concurrent execution, or overlapping, of kernel operations and memory copying from different processes to enhance utilization.