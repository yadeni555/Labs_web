import json
import functools

class Solution:
    def sum_number_in_string(self, number_string: str) -> int:
        amount = 0
        for i in range(len(number_string)):
            amount += int(number_string[i])

        return amount

    def get_leader_string(self, steps: int) -> str:
        leader = ''
        for i in range(steps):
            leader += (steps-1-i)*' '
            leader +=(1+i)*'#'
            leader+='\n'
        return leader

    def to_json(func):
        @functools.wraps(func)
        def wrapped(*args, **kwargs):
            return json.dumps(func(*args, **kwargs))  # <-- обратите внимание на вызов `func(...)`

        return wrapped

    @to_json
    def get_data(self, parm):
        return{
            'data': parm
        }

    def get_spiral_number_matrix(self, number):
        array = [[0] * number for i in range(number)]
        count = 0

        for i in range(number):  # заполнение 1 строки
            count += 1
            array[0][i] = count

        j = 0  # указываем последнюю заполненную ячейку
        i = number - 1
        number -= 1  # устанавливаем размер 1 блока 1 витка

        while len(array) ** 2 != count:  # условие выхода из цикла
            for k in range(number):  # движение вниз
                j += 1
                count += 1
                array[j][i] = count  # заполнение матрицы
            for k in range(number):  # движение влево
                i -= 1
                count += 1
                array[j][i] = count
            for k in range(number - 1):  # движение вверх
                j -= 1
                count += 1
                array[j][i] = count
            for k in range(number - 1):  # движение вправо
                i += 1
                count += 1
                array[j][i] = count
            number -= 2  # обеспечиваем переход на внутренний виток

        return array


if __name__ == '__main__':
    solution = Solution()
    print(solution.sum_number_in_string('12345'))
    # 15
    print(solution.sum_number_in_string('160438521039'))
    # 42

    print(solution.get_leader_string(3))
    print(solution.get_leader_string(5))

    print(solution.get_data(42))

    array = solution.get_spiral_number_matrix(5)
    for i in range(len(array)):
        for j in range(len(array[i])):
            print(array[i][j], end=' ')
        print()