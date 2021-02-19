import numpy as np
from qiskit import(
	QuantumCircuit,
	execute,
	Aer)
from qiskit.visualization import plot_histogram

simulator = Aer.get_backend('qasm_simulator')

circuit = QuantumCircuit(2,2)

circuit.h(0)

circuit.cx(0, 1)

circuit.measure([0,1], [0,1])

job = execute(circuit, simulator, shots=1000)

result = job.result()

counts = result.get_counts(circuit)
print("\nTotal count for 00 and 11 are:", counts)

circuit.draw()

plot_histogram(counts)

